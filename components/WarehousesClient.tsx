"use client";

import { useState } from "react";
import { Warehouse as WarehouseIcon, MapPin, Package, Plus } from "lucide-react";
import WarehouseCreateModal from "./WarehouseCreateModal";
import StockTransferModal from "./StockTransferModal";

interface WarehousesClientProps {
  warehouses: any[];
}

export default function WarehousesClient({ warehouses }: WarehousesClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTransferOpen, setIsTransferOpen] = useState(false);
  const [selectedWarehouseId, setSelectedWarehouseId] = useState<string | undefined>();

  const handleTransfer = (warehouseId: string) => {
    setSelectedWarehouseId(warehouseId);
    setIsTransferOpen(true);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">仓库管理</h1>
          <p className="text-gray-500 mt-1">管理您的多仓库分布及库存状态</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="erp-button-primary flex items-center gap-2 shadow-lg shadow-primary/20"
        >
          <Plus className="w-4 h-4" />
          新增仓库
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {warehouses.map((wh) => (
          <div key={wh.id} className="erp-card overflow-hidden group">
            <div className="p-6 border-b bg-gray-50/50 group-hover:bg-white transition-colors">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white rounded-xl border border-gray-100 shadow-sm group-hover:border-primary/20 transition-all">
                    <WarehouseIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">{wh.name}</h2>
                    <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5 font-medium">
                      <MapPin className="w-3 h-3" />
                      {wh.location || "位置未设置"}
                    </p>
                  </div>
                </div>
                <span className="bg-primary-50 text-primary text-[10px] px-2 py-1 rounded-lg font-bold uppercase tracking-tight">
                  {wh._count?.stocks || 0} SKU
                </span>
              </div>
            </div>
            
            <div className="p-6 bg-white">
              <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Package className="w-3.5 h-3.5" />
                最近库存动态
              </h3>
              <div className="space-y-3">
                {wh.stocks?.slice(0, 3).map((stock: any) => (
                  <div key={stock.id} className="flex justify-between items-center text-sm p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-gray-600 font-medium truncate pr-4">{stock.product.name}</span>
                    <span className="font-bold text-gray-900 bg-gray-100 px-2 py-0.5 rounded text-xs min-w-[32px] text-center">
                      {stock.quantity}
                    </span>
                  </div>
                ))}
                {(!wh.stocks || wh.stocks.length === 0) && (
                  <div className="py-8 text-center">
                    <p className="text-xs text-gray-400 italic">暂无库存记录</p>
                  </div>
                )}
                {wh.stocks?.length > 3 && (
                  <p className="text-[10px] text-center text-primary font-bold mt-2 cursor-pointer hover:underline">
                    查看全部 {wh.stocks.length} 个项目
                  </p>
                )}
              </div>
            </div>

            <div className="px-6 py-4 bg-gray-50 border-t flex justify-end gap-3">
              <button 
                onClick={() => alert("仓库详情设置功能开发中...")}
                className="text-xs font-bold text-gray-400 hover:text-primary transition-colors"
              >
                仓库设置
              </button>
              <button 
                onClick={() => handleTransfer(wh.id)}
                className="text-xs font-bold text-primary hover:bg-primary/5 px-3 py-1.5 rounded-lg transition-all"
              >
                库存调拨
              </button>
            </div>
          </div>
        ))}

        {warehouses.length === 0 && (
          <div className="col-span-full erp-card p-12 flex flex-col items-center justify-center border-dashed border-2 bg-gray-50/30">
            <div className="p-4 bg-white rounded-full shadow-sm mb-4">
              <WarehouseIcon className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-sm font-bold text-gray-900">暂无仓库信息</h3>
            <p className="text-xs text-gray-400 mt-1">点击右上角按钮添加您的第一个仓库</p>
          </div>
        )}
      </div>

      <WarehouseCreateModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      <StockTransferModal 
        isOpen={isTransferOpen}
        onClose={() => setIsTransferOpen(false)}
        warehouses={warehouses}
        initialFromWarehouseId={selectedWarehouseId}
      />
    </div>
  );
}
