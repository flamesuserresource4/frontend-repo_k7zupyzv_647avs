import { GraduationCap, Cpu, Code, BookOpen } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">About Me</h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            I’m a curious engineer who loves building end-to-end projects — from low-level hardware to polished interfaces. Currently exploring web 3D, AI-assisted tools, and energy-efficient systems.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <GraduationCap className="h-5 w-5 mt-0.5 text-indigo-600" />
              <p className="text-neutral-700 dark:text-neutral-300">B.E. in Electronics & Computer Engineering, 3rd Year</p>
            </li>
            <li className="flex items-start gap-3">
              <Cpu className="h-5 w-5 mt-0.5 text-indigo-600" />
              <p className="text-neutral-700 dark:text-neutral-300">Hands-on with ESP32, sensors, PCB basics, and prototyping</p>
            </li>
            <li className="flex items-start gap-3">
              <Code className="h-5 w-5 mt-0.5 text-indigo-600" />
              <p className="text-neutral-700 dark:text-neutral-300">JavaScript/TypeScript, Python, FastAPI, React, Tailwind</p>
            </li>
            <li className="flex items-start gap-3">
              <BookOpen className="h-5 w-5 mt-0.5 text-indigo-600" />
              <p className="text-neutral-700 dark:text-neutral-300">Strong fundamentals in DSA, OS, and Networks</p>
            </li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 blur-2xl rounded-3xl" aria-hidden />
          <div className="relative rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Core Skills</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {[
                "React / Vite",
                "FastAPI",
                "Tailwind CSS",
                "Embedded (ESP32)",
                "MongoDB",
                "Algorithms",
                "Git & DevOps",
                "3D / Spline",
              ].map((s) => (
                <span key={s} className="px-3 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 ring-1 ring-black/5 dark:ring-white/5">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
