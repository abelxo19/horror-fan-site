import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        
        // Extract user data from webhook
        const { id, given_name, email } = body;

        if (!id || !email) {
            return NextResponse.json({ error: "Invalid user data" }, { status: 400 });
        }

        // Sync user to database
        await prisma.user.upsert({
            where: { id },
            update: { name: given_name, email },
            create: { id, name: given_name, email }
        });

        return NextResponse.json({ message: "User synced successfully" }, { status: 200 });

    } catch (error) {
        console.error("Webhook Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
