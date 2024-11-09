const { PrismaClient } = require("@prisma/client");
const { NextResponse } = require("next/server");

const prisma = new PrismaClient();


export async function POST(request) {
    try{
       
        const userData = await request.json();
        const { name, email } = userData;       

        const newUser = await prisma.user.create({
            data:{
                name,
                email
            }
        });
        return NextResponse.json(newUser);
    } catch (error){
        return NextResponse.error("Internel Server Error",500);
    }
    
}

export async function GET() {
    try{
        const users = await prisma.user.findMany({
            include: { transactions: true },
        });
        console.log(users);
        return NextResponse.json(users);
    } catch(error){
        console.error("Error Fatching users:",error);
        return NextResponse.error("Internel Server Error",500);
      
    }
}