import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200/60 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-neutral-900 dark:text-white text-lg">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Aarav Sharma</span>
          <span className="ml-2 hidden sm:inline text-sm text-neutral-500">• 3rd Year Engineering</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white transition">About</a>
          <a href="#projects" className="text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white transition">Projects</a>
        </nav>
        <div className="flex items-center gap-2">
          <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
            <Github className="h-5 w-5" />
          </a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
            <Linkedin className="h-5 w-5" />
          </a>
          <a aria-label="Email" href="mailto:aarav@student.edu" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
