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
          <Link href="/" className="text-3xl font-bold">
            Portfolio.
          </Link>
          <div className="space-x-4">
            <a href="https://github.com/Glennpgp" className="nav-link">
              GitHub
            </a>
            <a href="/cv" className="nav-link">
              CV
            </a>
            <Link href="/contact">
              <a className="nav-link">Contact</a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto p-24 flex">
        {/* Profile Photo */}
        <div className="w-1/3">
          <Image
            src={pic}
            alt="Profile Photo"
            width={300}
            height={300}
            className="rounded-full shadow-xl border  border-orange-400"
          />
        </div>

        {/* Welcome Text and Description */}
        <div className="w-2/3 pl-12">
          <section className="text-center">
            <h1 className="text-5xl font-extrabold mb-4">
              Hi, I am Glenn Neil
            </h1>
            <h2 className="text-green-400">Front-end developer</h2>{" "}
            {/* Add the text-black class */}
            <br></br>
            <p className="text-xl text-gray-300">
              I enjoy designing and developing cool and interactive websites.
              I&lsquo;ve created this portfolio website primarily to showcase my
              work, aiming to provide value to individuals and businesses in the
              digital space.
            </p>
          </section>
        </div>
      </main>

      <div></div>

      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 mx-32 lg:grid-cols-3 gap-8">
          {/* Portfolio Item 1 */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <Image
              src="/images/project1.jpg"
              alt="STUDENT SCROLL"
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
