import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {

        const events = await prisma.project.findMany();
        return NextResponse.json(events);
    } catch (error) {
        return NextResponse.json({ error: "Error fetching events" }, { status: 500 });
    }
}
