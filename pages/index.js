import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

import Showcase from "../public/images/vex-showcase.jpg"
import Interested from "../public/images/teamspraypaint.jpg"
import HeroVideoPlaceholder from "../public/images/hero-video-placeholder.png"

import { FaHammer, FaCode, FaChessPawn, FaShareAlt } from "react-icons/fa";
import { useEffect, useRef } from 'react'

export default function Home() {
  const vidRef = useRef(null);
  
  useEffect(() => {
    vidRef.current.play();
  }, []);

  return (
    <Layout name="Home">
      <header className="h-screen relative bg-black">
        {/* Background image using Next.js Image, taken from here: https://github.com/vercel/next.js/discussions/18357#discussioncomment-132523 */}
        <video muted loop preload="none" poster={HeroVideoPlaceholder.src} className="h-screen min-w-full object-cover overflow-hidden absolute" ref={vidRef}>
          <source src="/VEXFrontPage.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-1 h-screen bg-opacity-60 bg-black flex items-center justify-center">
          <div className="mx-2 text-center">
            <h1 className="text-gray-500 font-bold text-4xl xs:text-5xl md:text-6xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">The Royals - 82050</span>
            </h1>

            <h2 className="text-gray-500 font-semibold text-2xl xs:text-3xl md:text-4xl mt-4">
              <span className="text-gray-300">We are The Royals, John Fraser's VEX Robotics team.</span>
            </h2>

            <div className="mt-6">
              <Link href="/join-us">
                <a className="py-2 px-4 bg-purple-500 rounded-lg font-semibold text-white hover:bg-purple-700 duration-150 text-md mt-4">
                  Join Today
                </a>
              </Link>
            </div>

          </div>
        </div>
      </header>

      <div className="flex p-10 flex-col items-center md:flex-row lg:p-20 xl:p-40 items-left bg-purple-50">
        <div className="flex-col w-4/5 text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-black font-bold text-2xl xs:text-3xl md:text-4xl">Who We Are</h1>
          <p className="mt-4 w-full md:w-3/4 text-lg text-gray-600">
            We're the John Fraser Royals, a group of students passionate for robotics, engineering, design, and programming.
            We compete in the high school VEX Robotics Competition in Ontario every year, constructing and coding a new robot to
            complete a challenge and compete with other teams across the province. Created in 2017, the club has expanded to include
            several members split between two teams, 82050A and 82050B.
          </p>
        </div>

        <div className="flex-col w-full md:w-1/2">
          <Image className="rounded" src={Showcase} alt="Placeholder" objectFit="cover" objectPosition="center" width={960} height={540} quality={100} placeholder="blur" />
        </div>
      </div>

      <div className="flex p-10 flex-col items-center lg:p-20 items-left bg-indigo-100">
        <div className="flex flex-col text-center">
          <h3 className="text-lg text-purple-500 font-semibold">What we all do</h3>
          <h1 className="text-4xl text-black font-bold">Our Team Roles</h1>
        </div>

        <div className="w-full lg:w-5/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 justify-between items-center text-center lg:text-left lg:items-start">
          <div className="flex flex-col p-4 gap-4 items-center lg:items-start">
            <div className="flex items-center justify-center text-2xl text-white bg-purple-500 w-12 h-12 rounded-lg">
              <FaHammer />
            </div>

            <h1 className="text-3xl font-bold">Engineer</h1>
            <p className="text-lg text-gray-600">
              Engineers generally design the robot using CAD software such as Fusion 360. They also build the robot.
            </p>
          </div>

          <div className="flex flex-col p-4 gap-4 items-center lg:items-start">
            <div className="flex items-center justify-center text-2xl text-white bg-purple-500 w-12 h-12 rounded-lg">
              <FaCode />
            </div>

            <h1 className="text-3xl font-bold">Programmer</h1>
            <p className="text-lg text-gray-600">
              Programmers generally code all aspects of the robot, such as its controls and autonomous movement.
            </p>
          </div>

          <div className="flex flex-col p-4 gap-4 items-center lg:items-start">
            <div className="flex items-center justify-center text-2xl text-white bg-purple-500 w-12 h-12 rounded-lg">
              <FaChessPawn />
            </div>

            <h1 className="text-3xl font-bold">Strategist</h1>
            <p className="text-lg text-gray-600">
              Strategists generally learn the ins and outs of the competition, creating and sharing strategies to bring the team to victory.
            </p>
          </div>

          <div className="flex flex-col p-4 gap-4 items-center lg:items-start">
            <div className="flex items-center justify-center text-2xl text-white bg-purple-500 w-12 h-12 rounded-lg">
              <FaShareAlt />
            </div>

            <h1 className="text-3xl font-bold">Media</h1>
            <p className="text-lg text-gray-600">
              Media members manage all the promotion and marketing, as well as our social media presence.
            </p>
          </div>
        </div>
      </div>

      <footer className="h-96 relative">
        {/* Background image using Next.js Image, taken from here: https://github.com/vercel/next.js/discussions/18357#discussioncomment-132523 */}
        <Image
          layout="fill"
          className="object-center object-cover pointer-events-none filter blur-sm"
          src={Interested}
          alt="Team Board"
        />

        <div className="flex items-center justify-center relative z-1 h-full bg-opacity-60 bg-black">
          <div className="mx-2 text-center">
            <h1 className="text-gray-500 font-bold text-4xl">
              <span className="text-white">Interested?</span>
            </h1>

            <h2 className="text-gray-500 font-semibold text-3xl mt-2">
              <span className="text-gray-300">What are you waiting for? Learn more about joining today!</span>
            </h2>

            <div className="mt-6">
              <Link href="/join-us">
                <a className="py-2 px-4 bg-purple-500 rounded-lg font-semibold text-white hover:bg-purple-700 duration-150 text-md mt-4">
                  Join Today
                </a>
              </Link>
            </div>

          </div>
        </div>
      </footer>
    </Layout>
  )
}
