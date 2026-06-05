import { prisma } from "@/lib/prisma";
import { Truck, RefreshCw, CheckCircle2, AlertCircle } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";

async function getOrders() {
  return await prisma.order.findMany({
    include: {
      items: {
        include: {
          product: true
        }
      },
      warehouse: true
    },
    orderBy: { createdAt: 'desc' }
  });
}

export default async function OrdersPage() {
  const orders = await getOrders();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">FBS 订单管理</h1>
          <p className="text-gray-500">同步并处理 Ozon 和 Wildberries 的 FBS 订单</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            <RefreshCw className="w-4 h-4" />
            同步平台订单
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            批量发货
          </button>
        </div>
      </div>

      <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b text-sm font-medium text-gray-500">
              <th className="px-6 py-4">订单编号</th>
              <th className="px-6 py-4">平台</th>
              <th className="px-6 py-4">商品信息</th>
              <th className="px-6 py-4">金额</th>
              <th className="px-6 py-4">出库仓库</th>
              <th className="px-6 py-4">状态</th>
              <th className="px-6 py-4">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y text-sm">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-900">
                  {order.platformOrderId}
                </td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "px-2 py-1 rounded text-xs font-bold",
                    order.platform === "Ozon" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"
                  )}>
                    {order.platform}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="space-y-1">
                    {order.items.map((item) => (
                      <p key={item.id} className="text-gray-600">
                        {item.product.name} x {item.quantity}
                      </p>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 font-medium">
                  {formatCurrency(order.totalAmount)}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {order.warehouse?.name || "未分配"}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5">
                    {order.status === "PENDING" ? (
                      <AlertCircle className="w-4 h-4 text-amber-500" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    )}
                    <span className={cn(
                      "font-medium",
                      order.status === "PENDING" ? "text-amber-600" : "text-green-600"
                    )}>
                      {order.status === "PENDING" ? "待处理" : "已发货"}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button className="text-primary hover:underline font-medium">
                    {order.status === "PENDING" ? "处理发货" : "详情"}
                  </button>
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan={7} className="px-6 py-12 text-center text-gray-500 italic">
                  暂无订单数据，点击上方“同步”按钮获取。
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
