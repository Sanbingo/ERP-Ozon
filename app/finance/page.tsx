import { prisma } from "@/lib/prisma";
import { CircleDollarSign, TrendingUp, TrendingDown, PieChart as PieChartIcon } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

async function getFinanceStats() {
  const products = await prisma.product.findMany({
    include: { stocks: true }
  });

  const inventoryValue = products.reduce((acc, p) => {
    const totalStock = p.stocks.reduce((sum, s) => sum + s.quantity, 0);
    return acc + (totalStock * p.cost);
  }, 0);

  const totalSales = await prisma.order.aggregate({
    _sum: { totalAmount: true }
  });

  const orders = await prisma.order.findMany();
  const shippedOrders = orders.filter(o => o.status === 'SHIPPED').length;

  return {
    inventoryValue,
    totalSales: totalSales._sum.totalAmount || 0,
    orderCount: orders.length,
    shippedOrders,
    profitMargin: 0.25 // Simulated
  };
}

export default async function FinancePage() {
  const stats = await getFinanceStats();

  const metrics = [
    { label: "库存资产总值", value: formatCurrency(stats.inventoryValue), icon: CircleDollarSign, color: "text-blue-600" },
    { label: "累计销售额", value: formatCurrency(stats.totalSales), icon: TrendingUp, color: "text-green-600" },
    { label: "预估毛利", value: formatCurrency(stats.totalSales * stats.profitMargin), icon: PieChartIcon, color: "text-purple-600" },
    { label: "待结算货款", value: formatCurrency(stats.inventoryValue * 0.4), icon: TrendingDown, color: "text-amber-600" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">财务精准管理</h1>
        <p className="text-gray-500">实时统计货盘数据，业财一体化分析</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m) => (
          <div key={m.label} className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className={cn("p-2 rounded-lg bg-gray-50")}>
                <m.icon className={cn("w-5 h-5", m.color)} />
              </div>
            </div>
            <p className="text-sm text-gray-500">{m.label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{m.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border shadow-sm">
          <h2 className="text-lg font-semibold mb-6">销售与支出趋势 (模拟)</h2>
          <div className="h-64 flex items-end justify-around pb-4 border-b">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <div key={i} className="w-12 bg-primary/20 rounded-t-sm relative group">
                <div 
                  className="bg-primary rounded-t-sm transition-all duration-500 group-hover:bg-primary/80" 
                  style={{ height: `${h}%` }}
                />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400">
                  {i + 1}月
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <h2 className="text-lg font-semibold mb-6">财务占比分析</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">采购成本</span>
                <span className="font-medium">65%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">物流费用</span>
                <span className="font-medium">15%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '15%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">平台佣金</span>
                <span className="font-medium">12%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '12%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">净利润</span>
                <span className="font-medium text-green-600">8%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '8%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
