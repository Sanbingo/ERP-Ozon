"use client";

import { useState, useEffect } from "react";
import { X, Loader2, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

interface StoreAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialFormState = {
  name: "",
  platform: "Ozon",
  apiKey: "",
  clientId: "",
};

export default function StoreAuthModal({ isOpen, onClose }: StoreAuthModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const router = useRouter();

  // Reset form data when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setFormData(initialFormState);
      setLoading(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/stores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        onClose();
        router.refresh();
      } else {
        const data = await res.json();
        alert(data.error || "授权失败");
      }
    } catch (error) {
      alert("网络错误，请重试");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="p-6 border-b flex justify-between items-center bg-gray-50/50">
          <h2 className="text-xl font-bold text-gray-900">授权新店铺</h2>
          <button onClick={onClose} className="p-2 hover:bg-white rounded-lg transition-colors">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">店铺名称</label>
            <input
              required
              type="text"
              placeholder="例如：Ozon 旗舰店 A"
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-primary/20 transition-all text-sm"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">选择平台</label>
            <div className="grid grid-cols-2 gap-3">
              {["Ozon", "Wildberries"].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setFormData({ ...formData, platform: p })}
                  className={`py-2 rounded-xl text-xs font-bold border-2 transition-all ${
                    formData.platform === p
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-gray-100 bg-gray-50 text-gray-400 hover:border-gray-200"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">API Key / Token</label>
            <textarea
              required
              rows={3}
              placeholder="请输入平台提供的 API Key 或授权 Token"
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-primary/20 transition-all text-sm font-mono"
              value={formData.apiKey}
              onChange={(e) => setFormData({ ...formData, apiKey: e.target.value })}
            />
          </div>

          {formData.platform === "Ozon" && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Client ID</label>
              <input
                required
                type="text"
                placeholder="Ozon 必须提供 Client ID"
                className="w-full bg-gray-50 border-none rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                value={formData.clientId}
                onChange={(e) => setFormData({ ...formData, clientId: e.target.value })}
              />
            </div>
          )}

          <div className="bg-blue-50 p-4 rounded-xl flex gap-3 mt-4">
            <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
            <p className="text-[10px] text-blue-700 leading-relaxed">
              系统将通过安全链路验证您的秘钥。授权成功后，系统将自动同步过去 30 天的订单和当前库存数据。
            </p>
          </div>

          <div className="pt-4 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 erp-button-secondary py-3"
            >
              取消
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 erp-button-primary py-3 flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              立即授权
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
