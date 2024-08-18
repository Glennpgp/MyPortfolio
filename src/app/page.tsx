import Image from "next/image";
import React from "react";
import pic from "../images/profile-photo.jpg";
import Link from "next/link";

export default function Home() {
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
              href="/pdfs/Glenn_Neil_CV_software_Engineer.pdf"
              className="nav-link hover:text-blue-500 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </Link>
            <Link
              href="https://www.linkedin.com/in/glenn-neil-15139b180/"
              className="nav-link hover:text-blue-500 transition-colors duration-300"
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
              alt="profile-photo.jpg"
              width={600}
              height={500}
              className="rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
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
                A software developer who loves turning ideas or problems into
                simple, effective solutions. Browse through my projects to see
                how I use creativity and technical know-how to build
                applications that make a real difference and add value.
              </p>
            </section>
          </div>
        </div>
      </main>

      <section className="mt-12 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Projects under my belt.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl">
          {/* Portfolio Item 1 */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <Image
              src="/images/project1.jpg"
              alt="Description of Project 1"
              width={300}
              height={200}
              layout="responsive"
            />
            <h3 className="text-xl font-semibold mt-4">STUDENT SCROLL</h3>
            <p className="text-gray-300 mt-2">
              StudentScroll brings together students from different backgrounds.
              You can meet like-minded people, keep up with what&apos;s going
              on, and use our responsive web app.
            </p>
          </div>

          {/* Portfolio Item 2 */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <Image
              src="/images/project2.jpg"
              alt="Project 2"
              width={300}
              height={200}
              layout="responsive"
            />
            <h3 className="text-xl font-semibold mt-4">MORTGAGE CALCULATOR</h3>
            <p className="text-gray-300 mt-2">
              Simple application to calculate mortgage to buy a house
            </p>
          </div>

          {/* Portfolio Item 3 */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <Image
              src="/images/project3.jpg"
              alt="Project 3"
              width={300}
              height={200}
              layout="responsive"
            />
            <h3 className="text-xl font-semibold mt-4">Project 3</h3>
            <p className="text-gray-300 mt-2">
              Description of project 3 goes here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
