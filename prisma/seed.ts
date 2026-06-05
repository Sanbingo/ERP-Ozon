import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Create Warehouses
  const wh1 = await prisma.warehouse.upsert({
    where: { name: '深圳主仓' },
    update: {},
    create: { name: '深圳主仓', location: '深圳' },
  })

  const wh2 = await prisma.warehouse.upsert({
    where: { name: '莫斯科海外仓' },
    update: {},
    create: { name: '莫斯科海外仓', location: '俄罗斯' },
  })

  // Create Products
  const p1 = await prisma.product.upsert({
    where: { sku: 'OZ-001' },
    update: {},
    create: {
      sku: 'OZ-001',
      name: '智能加湿器',
      cost: 45.0,
      price: 1599,
      category: '家居',
    },
  })

  const p2 = await prisma.product.upsert({
    where: { sku: 'WB-002' },
    update: {},
    create: {
      sku: 'WB-002',
      name: '无线蓝牙耳机',
      cost: 88.0,
      price: 2499,
      category: '数码',
    },
  })

  // Create Stocks
  await prisma.stock.upsert({
    where: { productId_warehouseId: { productId: p1.id, warehouseId: wh1.id } },
    update: {},
    create: { productId: p1.id, warehouseId: wh1.id, quantity: 150 },
  })

  await prisma.stock.upsert({
    where: { productId_warehouseId: { productId: p2.id, warehouseId: wh1.id } },
    update: {},
    create: { productId: p2.id, warehouseId: wh1.id, quantity: 200 },
  })

  // Create some orders
  await prisma.order.upsert({
    where: { platformOrderId: 'OZ-ORDER-1001' },
    update: {},
    create: {
      platform: 'Ozon',
      platformOrderId: 'OZ-ORDER-1001',
      status: 'PENDING',
      totalAmount: 1599,
      warehouseId: wh1.id,
      items: {
        create: {
          productId: p1.id,
          quantity: 1,
          price: 1599,
        }
      }
    }
  })

  // Create Stores
  await (prisma as any).store.upsert({
    where: { id: 'store-1' },
    update: {},
    create: {
      id: 'store-1',
      name: 'Ozon 官方旗舰店',
      platform: 'Ozon',
      apiKey: 'ozon-api-key-example-123456',
      clientId: '887766',
    }
  })

  await (prisma as any).store.upsert({
    where: { id: 'store-2' },
    update: {},
    create: {
      id: 'store-2',
      name: 'WB 俄罗斯二店',
      platform: 'Wildberries',
      apiKey: 'wb-token-example-789012',
    }
  })

  // Create Configs
  await (prisma as any).systemConfig.upsert({
    where: { key: 'low_stock_threshold' },
    update: {},
    create: {
      key: 'low_stock_threshold',
      value: '20',
      group: 'INVENTORY',
    }
  })

  await (prisma as any).systemConfig.upsert({
    where: { key: 'feishu_webhook' },
    update: {},
    create: {
      key: 'feishu_webhook',
      value: 'https://open.feishu.cn/open-apis/bot/v2/hook/example',
      group: 'NOTIFICATION',
    }
  })

  console.log('Seed data created!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
