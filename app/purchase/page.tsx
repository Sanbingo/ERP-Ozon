import { prisma } from "@/lib/prisma";
import { ShoppingBag, ArrowUpRight, TrendingDown, CheckCircle2 } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

async function getReplenishmentData() {
  const products = await prisma.product.findMany({
    include: {
      stocks: true,
    }
  });

  return products.map(p => {
    const totalStock = p.stocks.reduce((acc, s) => acc + s.quantity, 0);
    const suggested = Math.max(0, 100 - totalStock); // Simple logic: maintain 100 units
    return {
      ...p,
      totalStock,
      suggested,
      priority: suggested > 50 ? 'HIGH' : suggested > 0 ? 'MEDIUM' : 'LOW'
    };
  }).filter(p => p.suggested > 0);
}

export default async function PurchasePage() {
  const suggestions = await getReplenishmentData();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">采购管理</h1>
          <p className="text-gray-500">智能补货建议与 1688 一键下单</p>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
          <ShoppingBag className="w-4 h-4" />
          1688 批量下单
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">智能补货建议</h2>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b text-sm font-medium text-gray-500">
                <th className="px-6 py-4">产品 SKU</th>
                <th className="px-6 py-4">产品名称</th>
                <th className="px-6 py-4">当前总库存</th>
                <th className="px-6 py-4">建议补货量</th>
                <th className="px-6 py-4">优先级</th>
                <th className="px-6 py-4">预估成本</th>
                <th className="px-6 py-4">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y text-sm">
              {suggestions.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{p.sku}</td>
                  <td className="px-6 py-4 text-gray-600">{p.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{p.totalStock}</span>
                      {p.totalStock < 20 ? (
                        <TrendingDown className="w-4 h-4 text-red-500" />
                      ) : (
                        <ArrowUpRight className="w-4 h-4 text-amber-500" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-primary font-bold">+{p.suggested}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2 py-1 rounded text-xs font-bold",
                      p.priority === 'HIGH' ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"
                    )}>
                      {p.priority === 'HIGH' ? '紧急' : '普通'}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {formatCurrency(p.suggested * p.cost)}
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-primary hover:underline font-medium">
                      1688下单
                    </button>
                  </td>
                </tr>
              ))}
              {suggestions.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-gray-500 italic">
                    <div className="flex flex-col items-center gap-2">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                      库存充足，暂无补货建议
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
