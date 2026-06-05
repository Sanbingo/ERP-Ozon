"use client";

import { useState, useEffect } from "react";
import { X, Loader2, Warehouse, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

interface WarehouseCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialFormState = {
  name: "",
  location: "",
};

export default function WarehouseCreateModal({ isOpen, onClose }: WarehouseCreateModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const router = useRouter();

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
      const res = await fetch("/api/warehouses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        onClose();
        router.refresh();
      } else {
        const data = await res.json();
        alert(data.error || "创建失败");
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
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Warehouse className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">新增仓库</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white rounded-lg transition-colors">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">仓库名称</label>
            <input
              required
              type="text"
              placeholder="例如：深圳 1 号仓"
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">仓库地址/坐标</label>
            <div className="relative group">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="例如：中国 深圳 / 莫斯科"
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-xl mt-4">
            <p className="text-[10px] text-blue-700 leading-relaxed font-medium">
              温馨提示：新仓库创建后，您可以在“产品库”中为现有 SKU 分配初始库存，或在“采购管理”中通过入库操作增加库存。
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
              确认创建
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
