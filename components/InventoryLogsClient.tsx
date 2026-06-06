"use client";

import { useState, useEffect } from "react";
import { 
  History, 
  Upload, 
  Download, 
  Search, 
  ArrowUpCircle, 
  ArrowDownCircle,
  FileSpreadsheet,
  Loader2
} from "lucide-react";
import { format } from "date-fns";
import { formatCurrency, cn } from "@/lib/utils";

export default function InventoryLogsClient() {
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [importing, setImporting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchLogs = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/inventory/logs");
      if (res.ok) {
        const data = await res.json();
        setLogs(data);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImporting(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/inventory/import", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        alert(data.message);
        fetchLogs();
      } else {
        const data = await res.json();
        alert(data.error || "导入失败");
      }
    } catch (error) {
      alert("上传失败");
    } finally {
      setImporting(false);
      e.target.value = ""; // Clear input
    }
  };

  const filteredLogs = logs.filter(log => 
    log.product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.warehouse.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">库存流水记录</h1>
          <p className="text-gray-500 mt-1">追踪全渠道产品入库、出库及调拨历史</p>
        </div>
        <div className="flex gap-3">
          <label className="erp-button-secondary py-2 flex items-center gap-2 cursor-pointer">
            {importing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
            Excel 导入出入库
            <input type="file" accept=".xlsx, .xls" className="hidden" onChange={handleFileUpload} disabled={importing} />
          </label>
          <button className="erp-button-primary flex items-center gap-2 shadow-lg shadow-primary/20">
            <Download className="w-4 h-4" />
            导出流水
          </button>
        </div>
      </div>

      <div className="erp-card p-4 flex gap-4 items-center bg-white/50 backdrop-blur-sm">
        <div className="relative flex-1 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="按 SKU、产品名称或仓库搜索流水..." 
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary/20 transition-all text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="bg-blue-50 px-4 py-2 rounded-xl flex items-center gap-2">
          <FileSpreadsheet className="w-4 h-4 text-primary" />
          <span className="text-[10px] font-bold text-primary uppercase">模板说明: SKU, 仓库, 数量, 类型(IN/OUT), 备注</span>
        </div>
      </div>

      <div className="erp-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b text-xs font-bold text-gray-500 uppercase tracking-wider">
                <th className="px-6 py-4">时间</th>
                <th className="px-6 py-4">类型</th>
                <th className="px-6 py-4">产品 SKU / 名称</th>
                <th className="px-6 py-4">仓库</th>
                <th className="px-6 py-4">变动数量</th>
                <th className="px-6 py-4">变动原因</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary opacity-20" />
                  </td>
                </tr>
              ) : filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-500 font-mono text-xs">
                    {format(new Date(log.createdAt), "yyyy-MM-dd HH:mm")}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {log.type === "IN" ? (
                        <div className="flex items-center gap-1.5 text-success font-bold">
                          <ArrowUpCircle className="w-4 h-4" />
                          <span>入库</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 text-danger font-bold">
                          <ArrowDownCircle className="w-4 h-4" />
                          <span>出库</span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-bold text-gray-900">{log.product.sku}</p>
                      <p className="text-[10px] text-gray-400 truncate max-w-[200px]">{log.product.name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-700">{log.warehouse.name}</td>
                  <td className="px-6 py-4 font-bold text-base">
                    {log.type === "IN" ? "+" : "-"}{log.quantity}
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded-lg text-[10px] font-bold">
                      {log.reason || "系统操作"}
                    </span>
                  </td>
                </tr>
              ))}
              {!loading && filteredLogs.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-400 italic">
                    暂无流水记录
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
