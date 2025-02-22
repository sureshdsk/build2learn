import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const { project_title, project_github, project_page } = await req.json();

        if (!project_title || !project_github || !project_page) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const newProject = await prisma.project.create({
            data: { project_title, project_github, project_page },
        });

        return NextResponse.json(newProject, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Error adding project" }, { status: 500 });
    }
}
