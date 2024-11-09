// prisma/seed.js

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  
  const user1 = await prisma.user.create({
    data: {
      name: "Al Momin",
      email: "ali_joarder@gmail.com",
      transactions: {
        create: [
          { type: "buy", amount:"4000", status: "completed", createdAt: new Date('2023-11-01T10:00:00.000Z') },
          { type: "sell", amount: "3000", status: "pending", createdAt: new Date('2023-11-01T10:00:00.000Z') },
        ],
      },
    },
  })

  const user2 = await prisma.user.create({
    data: {
      name: "Shadab",
      email: "shadab@gmail.com",
      transactions: {
        create: [
            { type: "buy", amount:"5000", status: "completed", createdAt: new Date('2023-11-01T10:00:00.000Z') },
            { type: "sell", amount: "2000", status: "completed", createdAt: new Date('2023-11-01T10:00:00.000Z') },
        ],
      },
    },
  })

  console.log("Seeding completed.")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

