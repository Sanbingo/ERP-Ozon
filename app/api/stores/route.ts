import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) return NextResponse.json({ error: "未授权" }, { status: 401 });

    const body = await req.json();
    const { name, platform, apiKey, clientId } = body;

    if (!name || !platform || !apiKey) {
      return NextResponse.json({ error: "必填字段缺失" }, { status: 400 });
    }

    const store = await (prisma as any).store.create({
      data: {
        name,
        platform,
        apiKey,
        clientId,
        userId: user.id,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.error("Failed to create store:", error);
    return NextResponse.json({ error: "创建店铺失败" }, { status: 500 });
  }
}
