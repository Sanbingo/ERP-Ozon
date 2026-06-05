import { prisma } from "@/lib/prisma";
import { getAuthWhereClause } from "@/lib/auth";
import SettingsClient from "@/components/SettingsClient";

async function getData() {
  const where = await getAuthWhereClause() as any;
  const stores = await (prisma as any).store.findMany({ where });
  const configs = await (prisma as any).systemConfig.findMany();
  
  const groupedConfigs = configs.reduce((acc: Record<string, any[]>, config: any) => {
    if (!acc[config.group]) acc[config.group] = [];
    acc[config.group].push(config);
    return acc;
  }, {});

  return { stores, groupedConfigs };
}

export default async function SettingsPage() {
  const { stores, groupedConfigs } = await getData();

  return <SettingsClient stores={stores} groupedConfigs={groupedConfigs} />;
}
