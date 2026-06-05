import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "未授权" }, { status: 401 });

    const body = await req.json();
    const { name, location } = body;

    if (!name) {
      return NextResponse.json({ error: "仓库名称必填" }, { status: 400 });
    }

    // Check if warehouse name already exists for this user
    const existingWarehouse = await (prisma as any).warehouse.findUnique({
      where: { name },
    });

    if (existingWarehouse) {
      return NextResponse.json({ error: "仓库名称已存在" }, { status: 400 });
    }

    const warehouse = await (prisma as any).warehouse.create({
      data: {
        name,
        location,
        userId: user.id,
      },
    });

    return NextResponse.json(warehouse);
  } catch (error) {
    console.error("Failed to create warehouse:", error);
    return NextResponse.json({ error: "创建仓库失败" }, { status: 500 });
  }
}
