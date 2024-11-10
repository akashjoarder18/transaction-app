const { PrismaClient } = require("@prisma/client");
const { NextResponse } = require("next/server");
import { Parser } from 'json2csv';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();



export async function POST(request) {

  const data = await request.json();


  // Extract parameters from searchParams
  // const status = searchParams.get('status');
  // const type = searchParams.get('type');
  // const startDate = searchParams.get('startDate');
  // const endDate = searchParams.get('endDate');
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

  try {
    // Sample data to convert to CSV
    const jsonData = transactions;

    // Convert JSON data to CSV format
    const json2csvParser = new Parser();
    const csvData = json2csvParser.parse(jsonData);

    // Define file path and file name
    const fileName = `data-${Date.now()}.csv`;  // Unique file name with timestamp
    const filePath = path.join(process.cwd(), 'public', 'downloads', fileName);

    // Ensure the directory exists
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    // Write CSV data to the file
    fs.writeFileSync(filePath, csvData, 'utf-8');

    // Save file metadata to the database
    const newDownload = await prisma.download.create({
      data: {
        path: `/downloads/${fileName}`,  // Save relative path
        type: type,                         // File type can be dynamic based on your requirements
        status: status,                         // File type can be dynamic based on your requirements
        range: '',                         // File type can be dynamic based on your requirements
      },
    });

    // Respond with the download metadata
    return NextResponse.json(newDownload);
  } catch (error) {
    console.error("Error handling file download and database save:", error);
    return NextResponse.json({ error: "Error handling file download and database save." });
  }
}



export async function GET() {
    try{
        const download = await prisma.download.findMany({
            orderBy: {
                id: 'desc', 
              },
        }            
        );
        console.log(download);
        return NextResponse.json(download);
    } catch(error){
        console.error("Error Fatching users:",error);
        return NextResponse.error("Internel Server Error",500);
      
    }
}