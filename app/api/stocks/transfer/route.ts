import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "未授权" }, { status: 401 });

    const body = await req.json();
    const { fromWarehouseId, toWarehouseId, productId, quantity } = body;

    if (!fromWarehouseId || !toWarehouseId || !productId || !quantity || quantity <= 0) {
      return NextResponse.json({ error: "参数不完整或数量错误" }, { status: 400 });
    }

    if (fromWarehouseId === toWarehouseId) {
      return NextResponse.json({ error: "源仓库和目标仓库不能相同" }, { status: 400 });
    }

    // Use a transaction to ensure atomic transfer
    await (prisma as any).$transaction(async (tx: any) => {
      // 1. Check source stock
      const sourceStock = await tx.stock.findUnique({
        where: {
          productId_warehouseId: {
            productId,
            warehouseId: fromWarehouseId,
          },
        },
      });

      if (!sourceStock || sourceStock.quantity < quantity) {
        throw new Error("源仓库库存不足");
      }

      // 2. Decrease source stock
      await tx.stock.update({
        where: { id: sourceStock.id },
        data: { quantity: { decrement: quantity } },
      });

      // 3. Increase target stock (or create if not exists)
      await tx.stock.upsert({
        where: {
          productId_warehouseId: {
            productId,
            warehouseId: toWarehouseId,
          },
        },
        update: { quantity: { increment: quantity } },
        create: {
          productId,
          warehouseId: toWarehouseId,
          quantity,
          userId: user.id,
        },
      });

      // 4. Create financial record or log if needed (optional)
    });

    return NextResponse.json({ message: "调拨成功" });
  } catch (error: any) {
    console.error("Transfer failed:", error);
    return NextResponse.json({ error: error.message || "调拨失败" }, { status: 500 });
  }
}
