import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        console.log("🔹 Webhook triggered - POST request received");

        const body = await req.json();
        console.log("📩 Webhook Payload:", body);

        const { id, given_name, email } = body;

        if (!id || !email) {
            console.error("❌ Invalid payload: Missing required fields");
            return NextResponse.json({ error: "Invalid user data" }, { status: 400 });
        }

        // Sync user to database
        await prisma.user.upsert({
            where: { id },
            update: { name: given_name, email },
            create: { id, name: given_name, email }
        });

        console.log("✅ User synced successfully:", { id, email });
        return NextResponse.json({ message: "User synced successfully" }, { status: 200 });

    } catch (error) {
        console.error("❌ Webhook processing error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

// Block unsupported methods
export async function GET() {
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}
