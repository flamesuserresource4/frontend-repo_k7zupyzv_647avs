import { Code2, Cpu, Globe, Sparkles } from "lucide-react";

const projects = [
  {
    title: "AI Study Planner",
    description:
      "Smart timetable generator that adapts to course load, deadlines and your focus patterns.",
    tags: ["React", "FastAPI", "OpenAI"],
    icon: Sparkles,
  },
  {
    title: "IoT Energy Monitor",
    description:
      "Low-cost ESP32-based power monitoring with real-time dashboards and alerts.",
    tags: ["ESP32", "MQTT", "Grafana"],
    icon: Cpu,
  },
  {
    title: "Campus Helper App",
    description:
      "A PWA for managing clubs, events and room bookings with offline support.",
    tags: ["PWA", "Vite", "MongoDB"],
    icon: Globe,
  },
  {
    title: "Algorithm Visualizer",
    description:
      "Interactive visual explanations for sorting, pathfinding and DP problems.",
    tags: ["D3", "TypeScript", "Algorithms"],
    icon: Code2,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Featured Projects</h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-2xl">
          A selection of things I’ve built recently. Clean code, strong UX, and measurable impact.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description, tags, icon: Icon }) => (
            <article key={title} className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/60 backdrop-blur p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-600">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 ring-1 ring-black/5 dark:ring-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
