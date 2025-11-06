import { ExternalLink, GitBranch } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat API',
    description: 'WebSocket-powered chat backend with scalable rooms, JWT auth, and MongoDB persistence.',
    stack: ['FastAPI', 'MongoDB', 'WebSockets', 'Docker'],
    link: '#',
  },
  {
    title: 'Design System Website',
    description: 'A themable component library demo with dark mode, docs, and playground.',
    stack: ['React', 'Tailwind', 'MDX'],
    link: '#',
  },
  {
    title: 'Fitness Mobile App',
    description: 'Cross-platform React Native app with offline-first data sync and rich animations.',
    stack: ['React Native', 'Expo', 'SQLite'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Featured Work</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Projects</h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-gray-600">
            <GitBranch className="h-5 w-5" /> {projects.length} repos
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-gray-700" />
              </div>
              <p className="mt-2 text-gray-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 ring-1 ring-gray-200">{s}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
