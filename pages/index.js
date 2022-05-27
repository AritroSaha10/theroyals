import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

import Showcase from "../public/images/team-photos/tipping-point/everyone.jpg"
import Interested from "../public/images/teamspraypaint.jpg"
import HeroVideoPlaceholder from "../public/images/everyone-cropped.jpg"

import { FaHammer, FaCode, FaChessPawn, FaShareAlt } from "react-icons/fa";
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const topLineVariants = {
  initial: {
  },
  animate: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const bottomLineVariants = {
  initial: {
  },
  animate: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    }
  }
};

const characterVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ...transition }, }
};

const topLine = "Hey, we're the".split(' ');
const bottomLine = "82050 Royals.".split(' ');

export default function Home() {
  const vidRef = useRef(null);

  useEffect(() => {
    console.log(vidRef);
  }, []);

  return (
    <Layout name="Home">
      <div className="flex h-screen bg-gradient-to-r from-violet-200 to-purple-300">
        <div className="w-1/2">
          <video muted loop autoPlay poster={HeroVideoPlaceholder.src} className="h-full object-cover overflow-hidden" ref={vidRef}>
            <source src="/VEXFrontPage-H265.mp4" type="video/hevc" />
            <source src="/VEXFrontPage2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="w-1/2 p-16 z-1 flex flex-col justify-center">
          <div className="text-3xl md:text-4xl lg:text-5xl text-left">
            <div className="mb-4">
              <motion.div variants={topLineVariants} initial="initial" animate="animate" className="font-medium text-slate-700 flex gap-2">
                {topLine.map(char => <motion.span className="inline-block relative" variants={characterVariants} key={char}>{char}</motion.span>)}
              </motion.div>

              <motion.div variants={bottomLineVariants} initial="initial" animate="animate" className="font-bold flex gap-2">
                {bottomLine.map(char => <motion.span className="inline-block relative bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-purple-500" variants={characterVariants} key={char}>{char}</motion.span>)}
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-gray-700 mb-4">
            <p className="text-xl font-light">
              We're a <span className="text-red-500 font-medium">VEX Robotics team</span> from
              {" "}
              <span className="text-emerald-700 font-medium">Mississauga</span>
              , working from our school of {" "}
              <span className="text-indigo-600 font-medium">John Fraser Secondary School</span>.
            </p>
          </div>

          <div>
            <Link href="/join-us">
              <a className="py-2 px-4 bg-purple-500 rounded-lg font-semibold text-white hover:bg-purple-700 duration-150 text-md mt-4">
                Join Today →
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Navbar homePage />

      <div className="flex p-10 flex-col items-center md:flex-row lg:p-20 xl:px-40 items-left bg-purple-50">
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

        <div className="w-full xl:w-5/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 justify-between items-center text-center lg:text-left lg:items-start gap-4">
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
