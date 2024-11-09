const { PrismaClient } = require("@prisma/client");
const { NextResponse } = require("next/server");

const prisma = new PrismaClient();



export async function GET({status, startDate, endDate}) {
 
    //const {status, startDate, endDate} = req.query;

    const conditions = {}
  
    if (status) {
      conditions.status = status
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
  