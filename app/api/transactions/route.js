const { PrismaClient } = require("@prisma/client");
const { NextResponse } = require("next/server");

const prisma = new PrismaClient();



export async function GET(req,res) {
 
  // Parse query parameters from the URL
  const { searchParams } = new URL(req.url);
  
 
  // Extract parameters from searchParams
  const status = searchParams.get('status');
  const type = searchParams.get('type');
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  console.log(status);
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
  