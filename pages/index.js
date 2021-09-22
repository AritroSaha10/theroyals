import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout name="Home">
      <header className="h-screen relative">
        {/* Background image using Next.js Image, taken from here: https://github.com/vercel/next.js/discussions/18357#discussioncomment-132523 */}
        <video autoPlay muted loop className="h-screen min-w-full object-cover overflow-hidden absolute">
          <source src="/VEXFrontPage.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="h-full relative z-1 h-screen bg-opacity-60 bg-black flex items-center justify-center">
          <div className="mx-2 text-center">
            <h1 className="text-gray-500 font-bold text-4xl xs:text-5xl md:text-6xl">
              <span className="text-white">The Royals - 82050</span>
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

    </Layout>
  )
}
