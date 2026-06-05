import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthWhereClause } from "@/lib/auth";

export async function GET() {
  try {
    const where = await getAuthWhereClause() as any;
    const products = await (prisma as any).product.findMany({
      where,
      select: {
        id: true,
        name: true,
        sku: true,
      }
    });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
