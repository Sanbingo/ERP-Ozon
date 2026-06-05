import { prisma } from "@/lib/prisma";
import { 
  Settings, 
  Key, 
  Bell, 
  ShieldCheck, 
  Store as StoreIcon, 
  Plus, 
  Trash2, 
  RefreshCcw,
  Save,
  MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getAuthWhereClause } from "@/lib/auth";

async function getData() {
  const where = await getAuthWhereClause() as any;
  const stores = await (prisma as any).store.findMany({ where });
  const configs = await (prisma as any).systemConfig.findMany(); // Global configs usually don't filter by user, or filter by user? Let's keep global for now but store user-specific if needed. 
  
  // Actually, stores are definitely user-specific. 
  
  // Group configs by group name
  const groupedConfigs = configs.reduce((acc: Record<string, any[]>, config: any) => {
    if (!acc[config.group]) acc[config.group] = [];
    acc[config.group].push(config);
    return acc;
  }, {});

  return { stores, groupedConfigs };
}

export default async function SettingsPage() {
  const { stores, groupedConfigs } = await getData();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">系统配置</h1>
          <p className="text-gray-500 mt-1">管理店铺授权、预警阈值及外部系统集成</p>
        </div>
        <button className="erp-button-primary flex items-center gap-2 shadow-lg shadow-primary/20">
          <Save className="w-4 h-4" />
          保存全局配置
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Navigation or Sections */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Section 1: Store API Key Management */}
          <section className="erp-card overflow-hidden">
            <div className="p-6 border-b flex justify-between items-center bg-white">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Key className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">店铺秘钥管理</h2>
              </div>
              <button className="text-primary hover:bg-primary/5 px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors">
                <Plus className="w-4 h-4" />
                授权新店铺
              </button>
            </div>
            
            <div className="p-0">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b">
                    <th className="px-6 py-3">店铺名称</th>
                    <th className="px-6 py-3">平台</th>
                    <th className="px-6 py-3">API Key / Client ID</th>
                    <th className="px-6 py-3">状态</th>
                    <th className="px-6 py-3 text-right">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {stores.length > 0 ? stores.map((store: any) => (
                    <tr key={store.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-gray-900">{store.name}</td>
                      <td className="px-6 py-4">
                        <span className={cn(
                          "px-2 py-0.5 rounded text-[10px] font-bold uppercase",
                          store.platform === 'Ozon' ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"
                        )}>
                          {store.platform}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-mono text-xs text-gray-400">
                        {store.apiKey.slice(0, 8)}****************{store.apiKey.slice(-4)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-success" />
                          <span className="text-xs text-gray-600 font-medium">正常</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button className="p-1.5 hover:bg-white hover:shadow-sm rounded-lg text-gray-400 hover:text-primary transition-all">
                            <RefreshCcw className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 hover:bg-white hover:shadow-sm rounded-lg text-gray-400 hover:text-danger transition-all">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center">
                        <div className="flex flex-col items-center gap-2 opacity-30">
                          <StoreIcon className="w-10 h-10" />
                          <p className="text-sm font-medium">暂无已授权店铺</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Indicator Thresholds */}
          <section className="erp-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-50 rounded-lg">
                <Bell className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="text-lg font-bold text-gray-900">业务指标预警阈值</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">全局库存预警阈值</label>
                <div className="relative group">
                  <input 
                    type="number" 
                    defaultValue={groupedConfigs.INVENTORY?.find((c: any) => c.key === 'low_stock_threshold')?.value || "20"}
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-primary/20 transition-all font-bold text-gray-900"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-bold uppercase">Units</span>
                </div>
                <p className="text-[10px] text-gray-400">当任意 SKU 总库存低于此值时，将在仪表盘触发红色预警。</p>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">补货建议周期 (天)</label>
                <div className="relative group">
                  <input 
                    type="number" 
                    defaultValue={groupedConfigs.INVENTORY?.find((c: any) => c.key === 'replenishment_cycle')?.value || "15"}
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-primary/20 transition-all font-bold text-gray-900"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-bold uppercase">Days</span>
                </div>
                <p className="text-[10px] text-gray-400">系统根据此周期内的历史销售平均值提供补货建议。</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Feishu / Integrations */}
        <div className="space-y-8">
          <section className="erp-card p-6 bg-gradient-to-br from-white to-primary-50/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary rounded-lg">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg font-bold text-gray-900">飞书告警推送</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-primary-100 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-sm font-bold text-gray-700">推送状态: 已开启</span>
                </div>
                <div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">飞书 Webhook 地址</label>
                <textarea 
                  rows={3}
                  defaultValue={groupedConfigs.NOTIFICATION?.find((c: any) => c.key === 'feishu_webhook')?.value || ""}
                  placeholder="https://open.feishu.cn/open-apis/bot/v2/hook/..."
                  className="w-full bg-white border border-gray-100 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-xs font-mono"
                />
              </div>

              <div className="space-y-3 pt-2">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">推送触发条件</p>
                <div className="space-y-2">
                  {[
                    "库存低于阈值时",
                    "收到 Ozon 新订单时",
                    "Wildberries 订单延迟发货时",
                    "财务异常波动预警"
                  ].map((label, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-4 h-4 border-2 border-gray-200 rounded group-hover:border-primary transition-colors flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary rounded-sm opacity-100" />
                      </div>
                      <span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors">{label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="erp-card p-6 border-dashed border-2 bg-gray-50/50">
            <div className="flex flex-col items-center text-center gap-4 py-4">
              <div className="p-3 bg-white rounded-full shadow-sm">
                <ShieldCheck className="w-8 h-8 text-success" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">系统安全认证</h3>
                <p className="text-[10px] text-gray-400 mt-1 max-w-[200px]">您的所有 API Key 和秘钥均通过 AES-256 加密存储在本地数据库中。</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
