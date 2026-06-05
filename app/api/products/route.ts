import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "未授权" }, { status: 401 });

    const body = await req.json();
    const { sku, name, category, cost, price, image } = body;

    if (!sku || !name) {
      return NextResponse.json({ error: "SKU 和产品名称必填" }, { status: 400 });
    }

    // Check if SKU already exists
    const existingProduct = await (prisma as any).product.findUnique({
      where: { sku },
    });

    if (existingProduct) {
      return NextResponse.json({ error: "SKU 已存在" }, { status: 400 });
    }

    const product = await (prisma as any).product.create({
      data: {
        sku,
        name,
        category,
        cost: parseFloat(cost) || 0,
        price: parseFloat(price) || 0,
        image,
        userId: user.id,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error("Failed to create product:", error);
    return NextResponse.json({ error: "创建产品失败" }, { status: 500 });
  }
}
