"use client";

import { useState, useEffect } from "react";
import { X, Loader2, ArrowRightLeft, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";

interface StockTransferModalProps {
  isOpen: boolean;
  onClose: () => void;
  warehouses: any[];
  initialFromWarehouseId?: string;
}

export default function StockTransferModal({ isOpen, onClose, warehouses, initialFromWarehouseId }: StockTransferModalProps) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    fromWarehouseId: "",
    toWarehouseId: "",
    productId: "",
    quantity: 1,
  });
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        fromWarehouseId: initialFromWarehouseId || warehouses[0]?.id || "",
        toWarehouseId: warehouses.find(w => w.id !== (initialFromWarehouseId || warehouses[0]?.id))?.id || "",
      }));
      fetchProducts();
    }
  }, [isOpen, initialFromWarehouseId, warehouses]);

  const fetchProducts = async () => {
    const res = await fetch("/api/products/list"); // I need to create this simple list API
    if (res.ok) {
      const data = await res.json();
      setProducts(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/stocks/transfer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          quantity: parseInt(formData.quantity.toString()),
        }),
      });

      if (res.ok) {
        onClose();
        router.refresh();
      } else {
        const data = await res.json();
        alert(data.error || "调拨失败");
      }
    } catch (error) {
      alert("网络错误");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const currentWarehouse = warehouses.find(w => w.id === formData.fromWarehouseId);
  const availableProducts = currentWarehouse?.stocks?.map((s: any) => ({
    id: s.product.id,
    name: s.product.name,
    sku: s.product.sku,
    max: s.quantity
  })) || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="p-6 border-b flex justify-between items-center bg-gray-50/50">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <ArrowRightLeft className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">库存调拨</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white rounded-lg transition-colors">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">源仓库</label>
                <select
                  className="w-full bg-gray-50 border-none rounded-xl px-4 py-2.5 text-sm"
                  value={formData.fromWarehouseId}
                  onChange={(e) => setFormData({ ...formData, fromWarehouseId: e.target.value, productId: "" })}
                >
                  {warehouses.map(w => (
                    <option key={w.id} value={w.id}>{w.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex justify-center pb-2">
                <ArrowRightLeft className="w-5 h-5 text-gray-300" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">目标仓库</label>
                <select
                  className="w-full bg-gray-50 border-none rounded-xl px-4 py-2.5 text-sm"
                  value={formData.toWarehouseId}
                  onChange={(e) => setFormData({ ...formData, toWarehouseId: e.target.value })}
                >
                  {warehouses.filter(w => w.id !== formData.fromWarehouseId).map(w => (
                    <option key={w.id} value={w.id}>{w.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">选择产品 (仅限源仓有库存的产品)</label>
              <select
                required
                className="w-full bg-gray-50 border-none rounded-xl px-4 py-2.5 text-sm"
                value={formData.productId}
                onChange={(e) => setFormData({ ...formData, productId: e.target.value })}
              >
                <option value="">请选择产品...</option>
                {availableProducts.map((p: any) => (
                  <option key={p.id} value={p.id}>{p.name} (SKU: {p.sku}) - 可用: {p.max}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">调拨数量</label>
              <input
                required
                type="number"
                min="1"
                max={availableProducts.find((p: any) => p.id === formData.productId)?.max || 9999}
                className="w-full bg-gray-50 border-none rounded-xl px-4 py-2.5 text-sm font-bold"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
              />
            </div>
          </div>

          <div className="bg-amber-50 p-4 rounded-xl flex gap-3 mt-4">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
            <p className="text-[10px] text-amber-700 leading-relaxed">
              库存调拨将实时扣减源仓库库存并增加目标仓库库存。请确保实物已同步进行移库操作。
            </p>
          </div>

          <div className="pt-4 flex gap-3">
            <button type="button" onClick={onClose} className="flex-1 erp-button-secondary py-3">取消</button>
            <button
              type="submit"
              disabled={loading || !formData.productId}
              className="flex-1 erp-button-primary py-3 flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              开始调拨
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
