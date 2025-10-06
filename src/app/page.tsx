"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import pic from "../images/profile-photo.jpg";

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <a
      href={href}
      className={`text-lg font-medium transition-colors duration-300 px-2 py-1 rounded ${
        active ? "text-blue-400 bg-gray-800/30" : "text-gray-300 hover:text-white hover:bg-gray-800/10"
      }`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  // Client-only rendering guards and state
  const [isClient, setIsClient] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formStatus, setFormStatus] = useState<null | "idle" | "sending" | "success" | "error">("idle");
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    setIsClient(true);

    // smooth scrolling for internal links (enhances UX)
    document.documentElement.style.scrollBehavior = "smooth";

    const sections = ["home", "projects", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // offset for fixed nav
      for (const section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(section);
          return;
        }
      }
      setActiveSection("home");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // Simple client-side form handler (prevent page reload)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formStatus === "sending") return;
    const name = nameRef.current?.value?.trim() || "";
    const email = emailRef.current?.value?.trim() || "";
    const message = messageRef.current?.value?.trim() || "";
    if (!name || !email || !message) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 2500);
      return;
    }

    try {
      setFormStatus("sending");
      // Placeholder: send to API route in the future. For now just fake a delay.
      await new Promise((r) => setTimeout(r, 700));
      setFormStatus("success");
      if (nameRef.current) nameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
      setTimeout(() => setFormStatus("idle"), 3000);
    } catch (err) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white antialiased">
      {/* Navigation Bar */}
      <nav className="fixed w-full z-50 bg-gradient-to-b from-black/60 via-transparent to-transparent backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
              <span className="font-bold text-white">GN</span>
            </div>
            <span className="text-2xl font-semibold hover:text-blue-400 transition-colors">Glenn.dev</span>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <NavLink href="#home" active={activeSection === "home"}>Home</NavLink>
              <NavLink href="#projects" active={activeSection === "projects"}>Projects</NavLink>
              <NavLink href="#contact" active={activeSection === "contact"}>Contact</NavLink>
            </div>

            <div className="flex items-center gap-2">
              <Link href="https://github.com/Glennpgp" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/in/glenn-neil/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
              </Link>
            </div>
          </div>

          {/* mobile nav */}
          <div className="md:hidden flex items-center gap-3">
            <Link href="#projects" className="text-sm px-3 py-2 bg-blue-600 rounded-full">Projects</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-28 md:pt-36 lg:pt-40 pb-20 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-lg mb-2 text-blue-400">Welcome to my portfolio</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
                Hi-ya! I'm <span className="text-blue-400">Glenn</span>
              </h1>
              <p className="text-2xl mb-6 font-light text-green-400">Software Developer</p>

              <p className="text-lg md:text-xl max-w-xl text-gray-300">
                I build web apps that solve real problems. I enjoy clean code,
                accessible UI, and fast user experiences. Explore my projects
                below or get in touch.
              </p>

              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                <a href="#projects" className="px-6 py-3 rounded-full font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors">View Projects</a>
                <a href="#contact" className="px-6 py-3 rounded-full font-medium border border-blue-500 text-blue-300 hover:bg-gray-800 transition-colors">Contact Me</a>
              </div>
            </div>

            <div className="w-56 h-56 md:w-72 md:h-72 relative rounded-full mx-auto md:mx-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 opacity-20 blur-3xl"></div>
              <div className="relative rounded-full p-1 bg-gradient-to-br from-white/5 to-transparent">
                <Image src={pic} alt="Profile photo" width={300} height={300} className="rounded-full object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects - client only to avoid potential hydration issues with Image fill */}
      {isClient && (
        <section id="projects" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-blue-400">My</span> Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/** Card 1 */}
              <article className="group bg-gray-800/50 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                <a href="https://iot-test.miguelemmara.me/" target="_blank" rel="noreferrer" className="block">
                  <div className="relative aspect-video">
                    <Image src="/images/iot.jpg" alt="IoT" fill sizes="100%" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2">IoT Frontend Manager</h3>
                    <p className="text-gray-300 mb-3 text-sm">Monitor and manage IoT devices with real-time updates.</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs px-3 py-1 rounded bg-gray-700">React</span>
                      <span className="text-xs px-3 py-1 rounded bg-gray-700">IoT</span>
                    </div>
                  </div>
                </a>
              </article>

              {/** Card 2 */}
              <article className="group bg-gray-800/50 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                <div className="block">
                  <div className="relative aspect-video">
                    <Image src="/images/project1.jpg" alt="Student Scroll" fill sizes="100%" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2">STUDENT SCROLL</h3>
                    <p className="text-gray-300 mb-3 text-sm">A responsive community platform for students.</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs px-3 py-1 rounded bg-gray-700">Next.js</span>
                      <span className="text-xs px-3 py-1 rounded bg-gray-700">Firebase</span>
                    </div>
                  </div>
                </div>
              </article>

              {/** Card 3 */}
              <article className="group bg-gray-800/50 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                <a href="https://nextjs-dashboard-three-mu-90.vercel.app/" target="_blank" rel="noreferrer" className="block">
                  <div className="relative aspect-video">
                    <Image src="/images/auxo.jpg" alt="Auto Parts" fill sizes="100%" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2">Auto Parts Ordering System</h3>
                    <p className="text-gray-300 mb-3 text-sm">Full stack ordering system with REST API integration.</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs px-3 py-1 rounded bg-gray-700">Next.js</span>
                      <span className="text-xs px-3 py-1 rounded bg-gray-700">MongoDB</span>
                    </div>
                  </div>
                </a>
              </article>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {isClient && (
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-blue-400">Contact</span> Me
            </h2>

            <div className="max-w-2xl mx-auto bg-gradient-to-b from-gray-900/70 to-gray-800/50 p-6 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                    <input id="name" ref={nameRef} className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                    <input id="email" ref={emailRef} type="email" className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="you@domain.com" />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                  <textarea id="message" ref={messageRef} rows={5} className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500/40 resize-none" placeholder="How can I help?" />
                </div>

                <div className="flex items-center gap-4">
                  <button type="submit" className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-700 transition-colors" aria-live="polite">
                    {formStatus === "sending" ? "Sending..." : "Send Message"}
                  </button>

                  {formStatus === "success" && <div className="text-green-400">Message sent — thank you!</div>}
                  {formStatus === "error" && <div className="text-rose-400">Please complete all fields.</div>}
                </div>
              </form>

              <div className="mt-6 border-t border-gray-700 pt-4">
                <h3 className="text-lg font-semibold mb-3">Connect</h3>
                <div className="flex gap-3">
                  <Link href="https://github.com/Glennpgp" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded bg-gray-800 hover:bg-gray-700">GitHub</Link>
                  <Link href="https://www.linkedin.com/in/glenn-neil/" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded bg-gray-800 hover:bg-gray-700">LinkedIn</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <Link href="/" className="text-xl font-semibold hover:text-blue-400">Glenn.dev</Link>
            </div>
            <div className="text-gray-400">© {new Date().getFullYear()} Glenn Neil</div>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      {isClient && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5v14M5 12l7-7 7 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
