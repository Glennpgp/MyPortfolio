import Image from "next/image";
import React from "react";
import pic from "../images/profile-photo.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-3xl font-bold hover:text-blue-500 transition-colors duration-300"
          >
            Portfolio.
          </Link>
          <div className="space-x-4">
            <a
              href="https://github.com/Glennpgp"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="/pdfs/Glenn_Neil_CV_software_Engineer.pdf"
              className="nav-link"
              target="_blank"
              download="Glenn_Neil_CV_software_Engineer.pdf"
            >
              Download CV
            </a>

            <Link
              href="https://www.linkedin.com/in/glenn-neil-15139b180/"
              className="nav-link"
            >
              Linkedin
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto p-24 flex">
        {/* Profile Photo */}
        <div className="pro">
          <Image
            src={pic}
            alt="profile-photo.jpg"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>

        {/* Welcome Text and Description */}
        <div className="w-2/3 pl-12">
          <section className="text-center">
            <h1 className="text-5xl font-extrabold mb-4">
              Hi-ya! This is Glenn
            </h1>
            <h2 className="text-green-400">Software Developer</h2>{" "}
            {/* Add the text-black class */}
            <br></br>
            <p className="text-xl text-gray-300">
              A software developer who loves turning ideas or problems into
              simple, effective solutions. Browse through my projects to see how
              I use creativity and technical know-how to build applications that
              make a real difference and add value.
            </p>
          </section>
        </div>
      </main>

      <div></div>

      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Projects under my belt.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 mx-32 lg:grid-cols-3 gap-8">
          {/* Portfolio Item 1 */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <Image
              src="/images/project1.jpg"
              alt="Description of Project 1"
              width={300}
              height={200}
            />
            <h3 className="text-xl font-semibold mt-4">STUDENT SCROLL</h3>
            <p className="text-gray-300 mt-2">
              StudentScroll brings together students from different backgrounds.
              You can meet like-minded people, keep up with what&lsquo;s going
              on, and use our responsive web app.
            </p>
          </div>

          {/* Portfolio Item 2 */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <Image
              src="/project2.jpg"
              alt="Project 2"
              width={300}
              height={200}
            />
            <h3 className="text-xl font-semibold mt-4">MORGAGE CALCULATOR</h3>
            <p className="text-gray-300 mt-2">
              Simple application to calculate morgage to buy a house
            </p>
          </div>

          {/* Portfolio Item 3 */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <Image
              src="/project3.jpg"
              alt="Project 3"
              width={300}
              height={200}
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
