import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { phone } = await req.json();
    if (!phone) return NextResponse.json({ error: "手机号必填" }, { status: 400 });

    // Generate 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

    await (prisma as any).verificationCode.create({
      data: {
        phone,
        code,
        expiresAt,
      },
    });

    // In real world, send SMS here. For now, we just return it for demo or log it.
    console.log(`Verification code for ${phone}: ${code}`);

    return NextResponse.json({ message: "验证码已发送", code }); // Returning code for demo ease
  } catch (error) {
    return NextResponse.json({ error: "发送失败" }, { status: 500 });
  }
}
