import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Create Admin User
  const admin = await (prisma as any).user.upsert({
    where: { phone: '13800138000' },
    update: {},
    create: {
      phone: '13800138000',
      name: '超级管理员',
      role: 'ADMIN',
    },
  })

  // Create Warehouses
  const wh1 = await (prisma as any).warehouse.upsert({
    where: { name: '深圳主仓' },
    update: {},
    create: { name: '深圳主仓', location: '深圳', userId: admin.id },
  })

  const wh2 = await (prisma as any).warehouse.upsert({
    where: { name: '莫斯科海外仓' },
    update: {},
    create: { name: '莫斯科海外仓', location: '俄罗斯', userId: admin.id },
  })

  // Create Products
  const p1 = await (prisma as any).product.upsert({
    where: { sku: 'OZ-001' },
    update: {},
    create: {
      sku: 'OZ-001',
      name: '智能加湿器',
      cost: 45.0,
      price: 1599,
      category: '家居',
      userId: admin.id,
    },
  })

  const p2 = await (prisma as any).product.upsert({
    where: { sku: 'WB-002' },
    update: {},
    create: {
      sku: 'WB-002',
      name: '无线蓝牙耳机',
      cost: 88.0,
      price: 2499,
      category: '数码',
      userId: admin.id,
    },
  })

  // Create Stocks
  await (prisma as any).stock.upsert({
    where: { productId_warehouseId: { productId: p1.id, warehouseId: wh1.id } },
    update: {},
    create: { productId: p1.id, warehouseId: wh1.id, quantity: 150 },
  })

  await (prisma as any).stock.upsert({
    where: { productId_warehouseId: { productId: p2.id, warehouseId: wh1.id } },
    update: {},
    create: { productId: p2.id, warehouseId: wh1.id, quantity: 200 },
  })

  // Create some orders
  await (prisma as any).order.upsert({
    where: { platformOrderId: 'OZ-ORDER-1001' },
    update: {},
    create: {
      platform: 'Ozon',
      platformOrderId: 'OZ-ORDER-1001',
      status: 'PENDING',
      totalAmount: 1599,
      warehouseId: wh1.id,
      userId: admin.id,
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
      userId: admin.id,
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
