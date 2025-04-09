"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import pic from "../images/profile-photo.jpg";

export default function Home() {
  // Add client-side only rendering to prevent hydration errors
  const [isClient, setIsClient] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setIsClient(true);

    // Add scroll listener for section highlighting
    const handleScroll = () => {
      const sections = ["home", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation Bar */}
      <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
          <Link
            href="/"
            className="text-3xl font-bold hover:text-blue-500 transition-colors duration-300 mb-4 sm:mb-0"
          >
            Glenn.dev
          </Link>

          <div className="space-x-6 flex items-center">
            <div className="hidden md:flex space-x-8">
              {["home", "projects", "contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`text-lg font-medium transition-colors duration-300 ${
                    activeSection === section
                      ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>

            <Link
              href="https://github.com/Glennpgp"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            <Link
              href="/CV/Glenn_Neil_CV_software_Engineer.pdf"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-28 md:pt-36 lg:pt-40 pb-20 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            {/* Profile Photo with Glow Effect */}
            <div className="mb-12 md:mb-0 relative">
              <div className="absolute inset-0 rounded-full bg-blue-500 blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative rounded-full p-2 border-2 border-blue-500/50">
                <Image
                  src={pic}
                  alt="Profile photo"
                  width={280}
                  height={280}
                  className="rounded-full w-60 h-60 md:w-64 md:h-64 object-cover"
                  priority
                />
              </div>
            </div>

            {/* Welcome Text */}
            <div className="w-full md:w-3/5 text-center md:text-left">
              <h2 className="text-xl mb-2 text-blue-400">
                Welcome to my portfolio
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hi-ya! I'm
                <span className="ml-3 text-blue-500 relative">
                  Glenn
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform -translate-y-2"></span>
                </span>
              </h1>

              <div className="text-2xl md:text-3xl mb-8 font-light">
                <span className="text-green-400">Software Developer</span>
              </div>

              <p className="text-lg md:text-xl max-w-xl text-gray-300">
                Hi there! I&apos;m a software developer with a curious mind,
                eager to explore new and exciting challenges with a problem
                solving mindset. In this fast paced technological world, I am
                continuously working with new tools to find efficient ways to
                build robust software.
              </p>

              <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-full font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full font-medium bg-gray-800 border border-blue-500/50 hover:bg-gray-700 transition-colors duration-300"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Only render project section on client side to avoid hydration errors */}
      {isClient && (
        <section id="projects" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
              <span className="text-blue-400">My</span> Projects
              <span className="block w-20 h-1 bg-blue-500 mx-auto mt-4"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl">
              {/* Portfolio Item 1 */}
              <div className="group bg-gray-800/60 backdrop-blur-md hover:bg-gray-700/80 rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02]">
                <Link
                  href="https://iot-test.miguelemmara.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      src="/images/iot.jpg"
                      alt="IoT Project"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors duration-300">
                      IoT Frontend Manager
                    </h3>
                    <p className="text-gray-300">
                      An application which allows monitoring of IoT Devices.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-700">
                        React
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-700">
                        IoT
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-700">
                        WebSockets
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Portfolio Item 2 */}
              <div className="group bg-gray-800/60 backdrop-blur-md hover:bg-gray-700/80 rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02]">
                <div className="block">
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      src="/images/project1.jpg"
                      alt="Student Scroll Project"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors duration-300">
                      STUDENT SCROLL
                    </h3>
                    <p className="text-gray-300">
                      StudentScroll brings together students from different
                      backgrounds. You can meet like-minded people, keep up with
                      what&apos;s going on, and use our responsive web app.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-700">
                        Next.js
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-700">
                        Firebase
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-700">
                        Tailwind
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Portfolio Item 3 */}
              <div className="group bg-gray-800/60 backdrop-blur-md hover:bg-gray-700/80 rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02]">
                <Link
                  href="https://nextjs-dashboard-three-mu-90.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      src="/images/auxo.jpg"
                      alt="Auto Parts Project"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors duration-300">
                      Auto Parts Ordering System
                    </h3>
                    <p className="text-gray-300">
                      This is Full Stack Web Application for Auto Parts Ordering
                      System. API Handling to Create a new Part to the existing
                      Database and as well order Parts.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-700">
                        Next.js
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-700">
                        MongoDB
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-700">
                        REST API
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {isClient && (
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
              <span className="text-blue-400">Contact</span> Me
              <span className="block w-20 h-1 bg-blue-500 mx-auto mt-4"></span>
            </h2>

            <div className="max-w-2xl mx-auto bg-gray-800/60 backdrop-blur-md p-8 rounded-xl">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border-gray-600 focus:border-blue-500 border outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border-gray-600 focus:border-blue-500 border outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border-gray-600 focus:border-blue-500 border outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-10 pt-8 border-t border-gray-700">
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Glennpgp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link
                href="/"
                className="text-2xl font-bold hover:text-blue-500 transition-colors duration-300"
              >
                Glenn.dev
              </Link>
            </div>

            <div className="text-gray-400">
              © {new Date().getFullYear()} Glenn Neil. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {isClient && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
}
