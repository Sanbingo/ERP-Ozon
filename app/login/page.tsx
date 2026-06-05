"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Phone, Lock, ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [step, setStep] = useState(1); // 1: phone, 2: code
  const router = useRouter();

  const handleSendCode = async () => {
    if (!phone) return;
    setSending(true);
    try {
      const res = await fetch("/api/auth/send-code", {
        method: "POST",
        body: JSON.stringify({ phone }),
      });
      const data = await res.json();
      if (res.ok) {
        alert(`测试环境验证码: ${data.code}`); // For demo
        setStep(2);
      } else {
        alert(data.error);
      }
    } finally {
      setSending(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await signIn("credentials", {
      phone,
      code,
      redirect: false,
    });

    if (result?.ok) {
      router.push("/");
      router.refresh();
    } else {
      alert("验证码错误或已过期");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-erp">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-primary rounded-xl flex items-center justify-center mb-4">
            <Lock className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">ERP 系统登录</h2>
          <p className="mt-2 text-sm text-gray-500">使用手机验证码安全登录</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div className="relative group">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
              <input
                type="tel"
                placeholder="手机号"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={step === 2 || sending}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium"
              />
            </div>

            {step === 2 && (
              <div className="relative group animate-in fade-in slide-in-from-top-2">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  placeholder="6位验证码"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium tracking-[0.5em]"
                  maxLength={6}
                />
              </div>
            )}
          </div>

          <div>
            {step === 1 ? (
              <button
                type="button"
                onClick={handleSendCode}
                disabled={sending || !phone}
                className="erp-button-primary w-full py-3 flex items-center justify-center gap-2"
              >
                {sending ? <Loader2 className="h-5 w-5 animate-spin" /> : "获取验证码"}
                <ArrowRight className="h-5 w-5" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading || !code}
                className="erp-button-primary w-full py-3 flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "立即登录"}
                <ArrowRight className="h-5 w-5" />
              </button>
            )}
          </div>

          {step === 2 && (
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full text-center text-xs font-medium text-gray-400 hover:text-primary transition-colors"
            >
              修改手机号
            </button>
          )}
        </form>

        <div className="pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400 leading-relaxed">
            演示环境管理员: 13800138000 <br />
            默认验证码: 123456
          </p>
        </div>
      </div>
    </div>
  );
}
