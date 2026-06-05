"use client";

import { useState } from "react";
import { Package, Search, Plus, Filter, MoreHorizontal, ArrowUpDown } from "lucide-react";
import { formatCurrency, cn } from "@/lib/utils";
import ProductCreateModal from "./ProductCreateModal";

interface ProductsClientProps {
  products: any[];
}

export default function ProductsClient({ products }: ProductsClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(p => 
    p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">产品库管理</h1>
          <p className="text-gray-500 mt-1">管理您的 SKU 基础信息、采购成本与全局库存分布</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="erp-button-primary flex items-center gap-2 shadow-lg shadow-primary/20"
        >
          <Plus className="w-4 h-4" />
          新增 SKU
        </button>
      </div>

      <div className="erp-card p-4 flex gap-4 items-center bg-white/50 backdrop-blur-sm">
        <div className="relative flex-1 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="按 SKU、产品名称或关键词搜索..." 
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary/20 transition-all text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="erp-button-secondary py-2 flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            高级筛选
          </button>
          <button className="erp-button-secondary py-2">
            导出
          </button>
        </div>
      </div>

      <div className="erp-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b text-xs font-bold text-gray-500 uppercase tracking-wider">
                <th className="px-6 py-4">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700 transition-colors">
                    SKU 编码 <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-6 py-4">产品信息</th>
                <th className="px-6 py-4">类目</th>
                <th className="px-6 py-4">成本 (CNY)</th>
                <th className="px-6 py-4">库存分布 (仓库:数量)</th>
                <th className="px-6 py-4">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700 transition-colors">
                    当前总库存 <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-6 py-4 text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {filteredProducts.map((p) => {
                const totalStock = p.stocks.reduce((acc: number, s: any) => acc + s.quantity, 0);
                return (
                  <tr key={p.id} className="hover:bg-primary-50/30 transition-colors group">
                    <td className="px-6 py-4 font-mono text-xs font-bold text-gray-600">{p.sku}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center overflow-hidden group-hover:border-primary/30 transition-colors shadow-sm">
                          {p.image ? (
                            <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                          ) : (
                            <Package className="w-6 h-6 text-gray-300" />
                          )}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 group-hover:text-primary transition-colors">{p.name}</p>
                          <p className="text-[10px] text-gray-400 mt-0.5">ID: {p.id.slice(-8).toUpperCase()}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-tight">
                        {p.category || "未分类"}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-700">{formatCurrency(p.cost)}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1.5 max-w-[240px]">
                        {p.stocks.map((s: any) => (
                          <div key={s.id} className="flex items-center bg-white border border-gray-100 px-2 py-1 rounded-lg shadow-sm text-[10px]">
                            <span className="text-gray-400 mr-1">{s.warehouse.name}:</span>
                            <span className="font-bold text-primary">{s.quantity}</span>
                          </div>
                        ))}
                        {p.stocks.length === 0 && <span className="text-gray-400 italic text-xs">无库存数据</span>}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className={cn(
                          "w-2 h-2 rounded-full",
                          totalStock < 20 ? "bg-danger animate-pulse" : "bg-success"
                        )} />
                        <span className={cn(
                          "font-bold text-base",
                          totalStock < 20 ? "text-danger" : "text-gray-900"
                        )}>
                          {totalStock}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all text-gray-400 hover:text-primary">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t bg-gray-50/50 flex justify-between items-center">
          <p className="text-xs text-gray-500 font-medium">显示 {filteredProducts.length} 条数据中的第 1-{filteredProducts.length} 条</p>
          <div className="flex gap-2">
            <button className="erp-button-secondary py-1 text-xs disabled:opacity-50" disabled>上一页</button>
            <button className="erp-button-secondary py-1 text-xs disabled:opacity-50" disabled>下一页</button>
          </div>
        </div>
      </div>

      <ProductCreateModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
