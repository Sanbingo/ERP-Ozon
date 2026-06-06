import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthWhereClause } from "@/lib/auth";

export async function GET(req: Request) {
  try {
    const where = await getAuthWhereClause() as any;
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit") || "50");

    const logs = await (prisma as any).inventoryLog.findMany({
      where,
      include: {
        product: {
          select: { name: true, sku: true }
        },
        warehouse: {
          select: { name: true }
        }
      },
      orderBy: { createdAt: "desc" },
      take: limit,
    });

    return NextResponse.json(logs);
  } catch (error) {
    return NextResponse.json({ error: "获取记录失败" }, { status: 500 });
  }
}
