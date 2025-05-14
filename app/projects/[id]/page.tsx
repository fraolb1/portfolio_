import { notFound } from "next/navigation";
import { projectsData } from "@/lib/data";

export async function generateStaticParams() {
  return projectsData.map((p) => ({ id: p.id }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8 max-w-3xl mx-auto">
      <img
        src={project.imageUrl.src}
        alt={project.title}
        className="w-full h-auto rounded-xl mb-8 border border-gray-700"
      />
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-300 mb-6 leading-relaxed">
        {project.description}
      </p>
      <div>
        <div className="flex gap-2 flex-wrap">
          {project.tags.map((kw) => (
            <span
              key={kw}
              className="bg-gray-700 text-gray-200 text-xs px-3 py-1 rounded-full"
            >
              {kw}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
