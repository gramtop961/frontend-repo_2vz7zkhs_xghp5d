import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-6 py-16">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/90" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white shadow-lg ring-1 ring-black/10">
            <Rocket className="h-3.5 w-3.5" /> Building delightful software
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Backend, Frontend, and Mobile Developer
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-700">
            I craft scalable APIs, rich web apps, and polished mobile experiences. I love shipping high-impact products with clean code and thoughtful UX.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-5 py-3 text-white shadow hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/20">
              <Rocket className="h-5 w-5" /> View Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900/10">
              <Mail className="h-5 w-5" /> Contact
            </a>
            <div className="ml-2 flex items-center gap-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-md bg-white p-2 text-gray-700 ring-1 ring-gray-200 hover:text-black hover:shadow">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-md bg-white p-2 text-[#0A66C2] ring-1 ring-gray-200 hover:shadow">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
