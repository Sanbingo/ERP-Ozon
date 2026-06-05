import { prisma } from "@/lib/prisma";
import { getAuthWhereClause } from "@/lib/auth";
import WarehousesClient from "@/components/WarehousesClient";

async function getWarehouses() {
  const where = await getAuthWhereClause() as any;
  return await (prisma as any).warehouse.findMany({
    where,
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

  return <WarehousesClient warehouses={warehouses} />;
}
