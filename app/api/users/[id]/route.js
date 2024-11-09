const { PrismaClient } = require("@prisma/client");
const { NextResponse } = require("next/server");

const prisma = new PrismaClient();

export async function PUT(request,{params}) {
    try{
        const data = await request.json();
        console.log(data);
        const{name,email} = data;
        const id = parseInt(params.id);

        const updateUser = await prisma.user.update({
            where: {id},
            data:{
                name,
                email
            }
        });
        return NextResponse.json(updateUser);
    }catch(error){
        console.error("Error creating user:", error);
        return NextResponse.error("Internel Server Error",500);
    }
    
}

export async function DELETE(request, {params}) {
    try {
        const id = parseInt(params.id);
        const deletedUser = await prisma.user.delete({
            where: {id}
        });
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.error("Internel Server Error",500);
        
    }
    
}

