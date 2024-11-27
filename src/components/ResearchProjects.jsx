import { projects } from '../data/projects';

export default function ResearchProjects() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-6">研究项目</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.publications.map((pub) => (
                <span key={pub} className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                  {pub}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}