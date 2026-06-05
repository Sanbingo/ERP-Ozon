import { prisma } from "@/lib/prisma";
import { 
  Package, 
  ShoppingCart, 
  AlertTriangle, 
  TrendingUp,
  Warehouse as WarehouseIcon,
  CircleDollarSign,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { formatCurrency, cn } from "@/lib/utils";

async function getStats() {
  const totalProducts = await prisma.product.count();
  const totalOrders = await prisma.order.count();
  const lowStockProducts = await prisma.stock.count({
    where: { quantity: { lt: 10 } }
  });
  const warehouses = await prisma.warehouse.findMany({
    include: {
      stocks: true
    }
  });

  const totalValue = await prisma.product.findMany().then(products => 
    products.reduce((acc, p) => acc + (p.cost * 100), 0)
  );

  return {
    totalProducts,
    totalOrders,
    lowStockProducts,
    warehouses,
    totalValue
  };
}

export default async function Dashboard() {
  const stats = await getStats();

  const cards = [
    { label: "总产品数", value: stats.totalProducts, trend: "+12%", trendUp: true, icon: Package, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "待处理订单", value: stats.totalOrders, trend: "-5%", trendUp: false, icon: ShoppingCart, color: "text-green-600", bg: "bg-green-50" },
    { label: "库存预警", value: stats.lowStockProducts, trend: "需关注", trendUp: false, icon: AlertTriangle, color: "text-red-600", bg: "bg-red-50" },
    { label: "资产估值", value: formatCurrency(stats.totalValue), trend: "+8.4%", trendUp: true, icon: CircleDollarSign, color: "text-purple-600", bg: "bg-purple-50" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">业务仪表盘</h1>
          <p className="text-gray-500 mt-1">实时监控您的跨境电商业务核心指标</p>
        </div>
        <div className="flex space-x-3">
          <button className="erp-button-secondary">导出报表</button>
          <button className="erp-button-primary">刷新数据</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div key={card.label} className="erp-card p-6">
            <div className="flex justify-between items-start">
              <div className={cn("p-3 rounded-xl", card.bg)}>
                <card.icon className={cn("w-6 h-6", card.color)} />
              </div>
              <div className={cn(
                "flex items-center text-xs font-medium px-2 py-1 rounded-full",
                card.trendUp ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
              )}>
                {card.trendUp ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-500">{card.label}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1 tracking-tight">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 erp-card p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-lg font-bold text-gray-900">销售趋势分析</h2>
              <p className="text-sm text-gray-500">最近 7 天的订单成交情况</p>
            </div>
            <select className="text-sm border-none bg-gray-50 rounded-lg px-3 py-1.5 focus:ring-0 cursor-pointer">
              <option>最近7天</option>
              <option>最近30天</option>
            </select>
          </div>
          <div className="h-[300px] flex items-end justify-between px-4">
            {[35, 52, 45, 78, 62, 48, 85].map((h, i) => (
              <div key={i} className="w-16 flex flex-col items-center group">
                <div className="relative w-full flex justify-center items-end h-[240px]">
                  <div 
                    className="w-10 bg-primary/10 rounded-t-lg transition-all duration-500 group-hover:bg-primary/20" 
                    style={{ height: `100%` }}
                  />
                  <div 
                    className="absolute bottom-0 w-10 bg-primary rounded-t-lg transition-all duration-700 ease-out group-hover:bg-primary-600 shadow-sm" 
                    style={{ height: `${h}%` }}
                  />
                  <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs px-2 py-1 rounded">
                    {h} 笔
                  </div>
                </div>
                <span className="mt-4 text-xs font-medium text-gray-400">06-0{i+1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="erp-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <WarehouseIcon className="w-5 h-5 text-primary" />
              仓储分布
            </h2>
            <button className="text-xs text-primary font-medium hover:underline">查看全部</button>
          </div>
          <div className="space-y-4">
            {stats.warehouses.map((wh) => (
              <div key={wh.id} className="p-4 rounded-xl border border-gray-50 bg-gray-50/50 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-gray-900">{wh.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{wh.location || "中国 - 深圳"}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary">
                      {wh.stocks.reduce((acc, s) => acc + s.quantity, 0)}
                    </p>
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Total SKU</p>
                  </div>
                </div>
                <div className="mt-3 w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-primary h-full rounded-full" 
                    style={{ width: `${Math.min(100, (wh.stocks.reduce((acc, s) => acc + s.quantity, 0) / 500) * 100)}%` }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
