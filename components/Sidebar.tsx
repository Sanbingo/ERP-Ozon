"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Warehouse, 
  ShoppingCart, 
  Truck, 
  BarChart3, 
  Settings,
  PackageSearch,
  CircleDollarSign,
  ChevronRight,
  User
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "仪表盘概览", href: "/" },
  { group: "核心业务", items: [
    { icon: PackageSearch, label: "产品库管理", href: "/products" },
    { icon: Warehouse, label: "多仓库管理", href: "/warehouses" },
    { icon: ShoppingCart, label: "智能采购", href: "/purchase" },
    { icon: Truck, label: "FBS 订单处理", href: "/orders" },
  ]},
  { group: "财务报表", items: [
    { icon: CircleDollarSign, label: "财务总账", href: "/finance" },
  ]},
  { group: "系统", items: [
    { icon: Settings, label: "系统配置", href: "/settings" },
  ]}
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r flex flex-col h-screen sticky top-0">
      <div className="p-6 mb-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">ERP-Ozon</span>
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-6 overflow-y-auto">
        {menuItems.map((item, idx) => (
          <div key={idx} className="space-y-1">
            {item.group && (
              <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                {item.group}
              </h3>
            )}
            
            {item.items ? (
              item.items.map((subItem) => (
                <NavItem 
                  key={subItem.href} 
                  item={subItem} 
                  active={pathname === subItem.href} 
                />
              ))
            ) : (
              <NavItem 
                item={item as any} 
                active={pathname === item.href} 
              />
            )}
          </div>
        ))}
      </nav>

      <div className="p-4 border-t bg-gray-50/50">
        <div className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer group">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <User className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-semibold text-gray-900 truncate">系统管理员</p>
            <p className="text-xs text-gray-500 truncate">admin@erp.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ item, active }: { item: any, active: boolean }) {
  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group",
        active
          ? "bg-primary-50 text-primary shadow-sm"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      )}
    >
      <div className="flex items-center space-x-3">
        <item.icon className={cn(
          "w-5 h-5 transition-colors",
          active ? "text-primary" : "text-gray-400 group-hover:text-gray-600"
        )} />
        <span>{item.label}</span>
      </div>
      {active && <ChevronRight className="w-4 h-4" />}
    </Link>
  );
}
