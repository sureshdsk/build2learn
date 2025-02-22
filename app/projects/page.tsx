// import prisma from "@/lib/prisma";

// export default async function EventsPage() {
//     const events = await prisma.project.findMany();

//     return (
//         <div>
//             <h1>Projects</h1>
//             <ul>
//                 {events.map((event) => (
//                     <li key={event.id}>{event.project_title} - {event.project_github}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

import prisma from "@/lib/prisma";

export default async function ProjectsPage() {
    const projects = await prisma.project.findMany();

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition"
                    >
                        <h2 className="text-xl font-semibold text-gray-900">{project.project_title}</h2>
                        <p className="text-gray-600 mt-2">GitHub:</p>
                        <a
                            href={project.project_github}
                            target="_blank"
                            className="text-blue-500 hover:underline"
                        >
                            {project.project_github}
                        </a>
                        <p className="text-gray-600 mt-2">Project Page:</p>
                        <a
                            href={project.project_page}
                            target="_blank"
                            className="text-blue-500 hover:underline"
                        >
                            {project.project_page}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
