import { Mail, Send, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Let’s connect</h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">
            Open to internships, collaborations, and hackathon teams. Drop a message and I’ll get back soon.
          </p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <form className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-neutral-600 dark:text-neutral-300">Name</label>
                <input className="mt-1 w-full rounded-md border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-neutral-600 dark:text-neutral-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="you@email.com" />
              </div>
              <div>
                <label className="text-sm text-neutral-600 dark:text-neutral-300">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-md border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Tell me about your idea..." />
              </div>
              <button type="button" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-3 text-sm font-medium hover:opacity-90 transition">
                Send <Send className="h-4 w-4" />
              </button>
            </div>
          </form>

          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-600">
                <Mail className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Reach me directly</h3>
            </div>
            <div className="mt-4 space-y-3 text-neutral-700 dark:text-neutral-300">
              <p>Email: <a className="underline underline-offset-2 hover:text-neutral-950 dark:hover:text-white" href="mailto:aarav@student.edu">aarav@student.edu</a></p>
              <p>GitHub: <a className="underline underline-offset-2 hover:text-neutral-950 dark:hover:text-white" href="https://github.com/" target="_blank" rel="noreferrer">github.com/aarav</a></p>
              <p>LinkedIn: <a className="underline underline-offset-2 hover:text-neutral-950 dark:hover:text-white" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">linkedin.com/in/aarav</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
