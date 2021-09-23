import Image from "next/image"
import Link from 'next/link'

import Layout from "../components/Layout"

import Interested from "../public/images/teamspraypaint.jpg"

export default function AboutUs() {
    return (
        <Layout name="About Us">
            <header className="h-44 relative">
                {/* Background image using Next.js Image, taken from here: https://github.com/vercel/next.js/discussions/18357#discussioncomment-132523 */}
                <Image
                    layout="fill"
                    className="object-center object-cover pointer-events-none filter blur-sm"
                    src={Interested}
                    alt="Team Board"
                />

                <div className="flex items-center justify-center relative z-1 h-full bg-opacity-60 bg-black">
                    <div className="mx-2 text-center">
                        <h1 className="text-gray-500 font-bold text-4xl lg:text-5xl">
                            <span className="text-white">About Us</span>
                        </h1>
                    </div>
                </div>
            </header>
        
            <div className="text-center lg:text-left px-10 py-2 lg:px-20 lg:py-4 xl:px-60 xl:py-10">
                <h1 className="text-3xl font-semibold mb-2">What is VEX?</h1>

                <p className="text-md text-gray-600">
                    The VEX Robotics Competition is a popular robotics program 
                    for students worldwide, held by Innovation First International. 
                    Teams build a robot with provided VEX parts and program it to run 
                    through a course and complete objectives, such as throwing a ball 
                    in a hoop or stacking cubes into towers and cups. Each challenge allows 
                    students to expand their knowledge within the domains of engineering, design,
                    programming, and of course, teamwork! For VRC specifically, high school and 
                    middle school students are able to compete with their built robots. For younger 
                    students, VEX-IQ is available, and for post-secondary students, VEXU is available.
                </p>
            </div>

            <div className="text-center lg:text-left px-10 py-2 lg:px-20 xl:px-60">
                <h1 className="text-3xl font-semibold mb-2">Why should you join?</h1>

                <p className="text-md text-gray-600">
                VEX is an excellent learning opportunity for students - just ask our team members! 
                    Building a robot from the ground up with your team teaches you to think critically 
                    and learn much more about design. Students get to become part of a team working towards 
                    the same objective, building tight-knit bonds and friendships with their teammates. 
                    Participating in competitions with your team is also an excellent experience, allowing 
                    members to meet other individuals who are passionate for STEM.
                </p>
            </div>
        </Layout>
    )
}