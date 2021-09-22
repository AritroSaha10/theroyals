import Head from 'next/head'
import Layout from '../components/Layout'
import Image from 'next/image'

import Hero from "../public/images/VEX-Worlds-Celebration.png"

import ClipPath from "../styles/clip-path.module.css"

export default function Home() {
  return (
    <Layout name="Home">
      <header className="h-screen relative">
        {/* Background image using Next.js Image, taken from here: https://github.com/vercel/next.js/discussions/18357#discussioncomment-132523 */}
        <video autoPlay muted loop className="min-w-full min-h-full absolute">
          <source src="/VEXFrontPage.mp4" type="video/mp4" />
        </video>

        <div className="relative z-1 h-screen bg-opacity-60 bg-black flex items-center justify-center">
          <div className="mx-2 text-center">
            <h1 className="text-gray-500 font-bold text-4xl xs:text-5xl md:text-6xl">
              <span className="text-white">John Fraser VEX Robotics</span>
            </h1>
            <h2 className="text-gray-500 font-semibold text-2xl xs:text-3xl md:text-4xl mt-4">
              <span className="text-gray-300">We are 82050A and 82050B, John Fraser's VEX Robotics teams.</span>
            </h2>
          </div>
        </div>
      </header>

    </Layout>
  )
}
