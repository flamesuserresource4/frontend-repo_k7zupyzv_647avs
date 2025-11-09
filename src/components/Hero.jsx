import Spline from "@splinetool/react-spline";
import { ArrowRight, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlay for readability - does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 dark:from-neutral-950/70 dark:via-neutral-950/40 dark:to-neutral-950/95" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur px-3 py-1 ring-1 ring-black/10 dark:ring-white/10">
            <Rocket className="h-4 w-4 text-indigo-600" />
            <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Tech • Portfolio • Playful • Modern</span>
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Aarav</span> —
            <br className="hidden sm:block" /> 3rd Year Engineering Student
          </h1>
          <p className="mt-5 text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
            I build delightful, performant experiences across web, embedded systems and AI. I love shipping polished projects, exploring 3D on the web, and solving real-world problems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-3 text-sm font-medium hover:opacity-90 transition">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white/80 dark:bg-neutral-900/80 backdrop-blur px-5 py-3 text-sm font-medium ring-1 ring-black/10 dark:ring-white/10 text-neutral-900 dark:text-white hover:bg-white/90 dark:hover:bg-neutral-900/90 transition">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
