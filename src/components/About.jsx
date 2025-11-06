import { Code, Smartphone, Server, Sparkles } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: <Server className="h-5 w-5" />, title: 'Backend', items: ['FastAPI', 'Node.js', 'PostgreSQL', 'MongoDB', 'Auth & CI/CD'] },
    { icon: <Code className="h-5 w-5" />, title: 'Frontend', items: ['React', 'Next.js', 'Tailwind', 'Shadcn UI', 'Accessibility'] },
    { icon: <Smartphone className="h-5 w-5" />, title: 'Mobile', items: ['React Native', 'Expo', 'App Store / Play', 'Animations'] },
  ];

  return (
    <section id="about" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-start justify-between gap-8">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-medium text-gray-600"><Sparkles className="h-4 w-4" /> About</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">What I do</h2>
            <p className="mt-3 max-w-2xl text-gray-600">I build fast, reliable products — from backend systems and web apps to mobile experiences. I care about developer experience, performance, and design details.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-center gap-2 text-gray-800">
                <div className="rounded-lg bg-gray-100 p-2">{s.icon}</div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
