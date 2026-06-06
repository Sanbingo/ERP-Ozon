import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import * as XLSX from "xlsx";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "未授权" }, { status: 401 });

    const formData = await req.formData();
    const file = formData.get("file") as File;
    if (!file) return NextResponse.json({ error: "未找到文件" }, { status: 400 });

    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet) as any[];

    // Expected format: SKU, WarehouseName, Quantity, Type (IN/OUT), Reason
    const results = await (prisma as any).$transaction(async (tx: any) => {
      const logs = [];
      for (const row of data) {
        const sku = row["SKU"] || row["sku"];
        const warehouseName = row["仓库"] || row["Warehouse"];
        const quantity = parseInt(row["数量"] || row["Quantity"]);
        const type = (row["类型"] || row["Type"] || "IN").toUpperCase(); // IN or OUT
        const reason = row["备注"] || row["Reason"] || "EXCEL_IMPORT";

        if (!sku || !warehouseName || isNaN(quantity)) continue;

        // Find product
        const product = await tx.product.findUnique({ where: { sku } });
        if (!product) continue;

        // Find warehouse
        const warehouse = await tx.warehouse.findUnique({ where: { name: warehouseName } });
        if (!warehouse) continue;

        // Update stock
        const stock = await tx.stock.upsert({
          where: {
            productId_warehouseId: {
              productId: product.id,
              warehouseId: warehouse.id,
            },
          },
          update: {
            quantity: {
              [type === "IN" ? "increment" : "decrement"]: quantity,
            },
          },
          create: {
            productId: product.id,
            warehouseId: warehouse.id,
            quantity: type === "IN" ? quantity : -quantity,
            userId: user.id,
          },
        });

        // Create log
        const log = await tx.inventoryLog.create({
          data: {
            type,
            productId: product.id,
            warehouseId: warehouse.id,
            quantity,
            reason,
            userId: user.id,
          },
        });
        logs.push(log);
      }
      return logs;
    });

    return NextResponse.json({ message: `成功处理 ${results.length} 条记录`, count: results.length });
  } catch (error: any) {
    console.error("Excel import failed:", error);
    return NextResponse.json({ error: error.message || "导入失败" }, { status: 500 });
  }
}
