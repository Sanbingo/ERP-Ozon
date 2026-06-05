import { prisma } from "@/lib/prisma";
import { Warehouse as WarehouseIcon, MapPin, Package } from "lucide-react";

async function getWarehouses() {
  return await prisma.warehouse.findMany({
    include: {
      _count: {
        select: { stocks: true }
      },
      stocks: {
        include: {
          product: true
        }
      }
    }
  });
}

export default async function WarehousesPage() {
  const warehouses = await getWarehouses();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">仓库管理</h1>
          <p className="text-gray-500">管理您的多仓库库存分布</p>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
          新增仓库
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {warehouses.map((wh) => (
          <div key={wh.id} className="bg-white rounded-xl border shadow-sm overflow-hidden">
            <div className="p-6 border-b bg-gray-50/50">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg border shadow-sm">
                    <WarehouseIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">{wh.name}</h2>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {wh.location || "位置未设置"}
                    </p>
                  </div>
                </div>
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
                  {wh._count.stocks} 个 SKU
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Package className="w-4 h-4" />
                库存概览
              </h3>
              <div className="space-y-3">
                {wh.stocks.slice(0, 3).map((stock) => (
                  <div key={stock.id} className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">{stock.product.name} ({stock.product.sku})</span>
                    <span className="font-mono font-bold text-gray-900">{stock.quantity}</span>
                  </div>
                ))}
                {wh.stocks.length > 3 && (
                  <p className="text-xs text-center text-gray-400 mt-2">
                    还有 {wh.stocks.length - 3} 个 SKU...
                  </p>
                )}
                {wh.stocks.length === 0 && (
                  <p className="text-sm text-center text-gray-400 italic">暂无库存</p>
                )}
              </div>
            </div>

            <div className="px-6 py-4 bg-gray-50 border-t flex justify-end gap-3">
              <button className="text-sm text-gray-600 hover:text-primary transition-colors font-medium">
                查看详情
              </button>
              <button className="text-sm text-gray-600 hover:text-primary transition-colors font-medium">
                库存调拨
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
