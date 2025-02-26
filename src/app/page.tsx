"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import pic from "../images/profile-photo.jpg";

export default function Home() {
  // Add client-side only rendering to prevent hydration errors
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <Link
            href="/"
            className="text-3xl font-bold hover:text-blue-500 transition-colors duration-300 mb-4 sm:mb-0"
          >
            Portfolio.
          </Link>
          <div className="space-y-2 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
            <Link
              href="https://github.com/Glennpgp"
              className="nav-link hover:text-blue-500 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            <Link
              href="/CV/Glenn_Neil_CV_software_Engineer.pdf"
              className="nav-link hover:text-blue-500 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </Link>
            <Link
              href="https://www.linkedin.com/in/glenn-neil-15139b180/"
              className="nav-link hover:text-blue-500 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:p-24">
        <div className="flex flex-col md:flex-row items-center">
          {/* Profile Photo */}
          <div className="pro mb-8 md:mb-0">
            <Image
              src={pic}
              alt="Profile photo"
              width={300}
              height={300}
              className="rounded-e-xl w-54 h-54 md:w-64 md:h-64 lg:w-60 lg:h-60"
              priority
            />
          </div>

          {/* Welcome Text and Description */}
          <div className="w-full md:w-2/3 md:pl-12">
            <section className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                Hi-ya! This is Glenn
              </h1>
              <h2 className="text-green-400 text-xl md:text-2xl">
                Software Developer
              </h2>
              <br />
              <p className="text-lg md:text-xl text-gray-300">
                Hi there! I am a software developer with a curious mind, eager
                to explore new and exciting challenges with a problem-solving
                mindset. In this fast-paced technological world, I am
                continuously working with new tools to find efficient ways to
                build robust software.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Only render project section on client side to avoid hydration errors */}
      {isClient && (
        <section className="mt-12 px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
            Projects under my belt.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl">
            {/* Portfolio Item 1 */}
            <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <Link
                href="https://iot-test.miguelemmara.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div
                  className="relative w-full"
                  style={{ paddingTop: "66.67%" }}
                >
                  <Image
                    src="/images/iot.jpg"
                    alt="IoT Project"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover absolute top-0 left-0 rounded"
                  />
                </div>
                <h3 className="text-xl font-semibold mt-4">
                  IoT Frontend Manager
                </h3>
                <p className="text-gray-300 mt-2">
                  An application which allows monitoring of IoT Devices.
                </p>
              </Link>
            </div>

            {/* Portfolio Item 2 */}
            <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <div className="block">
                <div
                  className="relative w-full"
                  style={{ paddingTop: "66.67%" }}
                >
                  <Image
                    src="/images/project1.jpg"
                    alt="Student Scroll Project"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover absolute top-0 left-0 rounded"
                  />
                </div>
                <h3 className="text-xl font-semibold mt-4">STUDENT SCROLL</h3>
                <p className="text-gray-300 mt-2">
                  StudentScroll brings together students from different
                  backgrounds. You can meet like-minded people, keep up with
                  what&apos;s going on, and use our responsive web app.
                </p>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <Link
                href="https://nextjs-dashboard-three-mu-90.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div
                  className="relative w-full"
                  style={{ paddingTop: "66.67%" }}
                >
                  <Image
                    src="/images/auxo.jpg"
                    alt="Auto Parts Project"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover absolute top-0 left-0 rounded"
                  />
                </div>
                <h3 className="text-xl font-semibold mt-4">
                  Auto Parts Ordering System
                </h3>
                <p className="text-gray-300 mt-2">
                  This is Full Stack Web Application for Auto Parts Ordering
                  System. API Handling to Create a new Part to the existing
                  Database and as well order Parts.
                </p>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
