const { PrismaClient } = require("@prisma/client");
const { NextResponse } = require("next/server");

const prisma = new PrismaClient();


export async function POST(request) {

  const data = await request.json();
  
 
  const { startDate, endDate, type, status } = data

    const conditions = {}
    
    if (status) {
      conditions.status = status
    }

    if (type) {
      conditions.type = type
    }
  
    if (startDate && endDate) {
      conditions.createdAt = {
        gte: new Date(startDate),  
        lte: new Date(endDate),    
      }
    } else if (startDate) {
      conditions.createdAt = {
        gte: new Date(startDate),
      }
    } else if (endDate) {
      conditions.createdAt = {
        lte: new Date(endDate),
      }
    }
  
    // Execute the query with the conditions
    const transactions = await prisma.transaction.findMany({
      where: conditions,
      include: { user: true },
    })

    return NextResponse.json(transactions);
  
  }
  