import Image from "next/image"
import Link from 'next/link'
import { AiOutlineForm } from "react-icons/ai"

import Layout from "../components/Layout"

import Interested from "../public/images/teamspraypaint.jpg"
import TippingPointField from "../public/images/tipping-point-field.png"

export default function JoinUs() {
    return (
        <Layout name="Join Us">
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
                            <span className="text-white">Join Us</span>
                        </h1>
                    </div>
                </div>
            </header>

            <div className="text-center lg:text-left px-10 pt-6 pb-2 lg:px-20 xl:px-60 lg:pt-12 lg:pb-4">
                <p className="text-md text-gray-600">
                    Thank you for expressing interest in joining our club! Here, you'll be
                    able to find more information about how and where to apply.
                </p>
            </div>
            
            <div className="text-center lg:text-left px-10 py-4 lg:px-20 xl:px-60">
                <h1 className="text-3xl font-semibold mb-2">Applications (Open!)</h1>

                <p className="text-md text-gray-600 mb-2 align-middle">
                    As of now, applications are <b>open</b>! They are due by <b>Monday, October 11th, 2021 at 11:59PM</b>.
                    Late applicants will not be considered.
                </p>

                <p className="text-md text-gray-600 mb-2 align-middle">                    
                    You can check the applications out using this
                    {" "}
                    <Link href="https://forms.gle/fonrrF7YoDvFzLPX9">
                        <a className="text-blue-500 hover:text-blue-700 duration-150" target="_blank" rel="noreferrer">
                            <AiOutlineForm className="inline mr-1" />
                            Google Form
                        </a>
                    </Link>
                    {" "}
                    link. Please note that you must use your personal account to access the form.
                </p>

                <p className="text-md text-gray-600 mb-2 align-middle">
                    Good luck!
                </p>
            </div>

            <div className="text-center lg:text-left px-10 py-4 lg:px-20 xl:px-60">
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


            <div className="text-center lg:text-left px-10 py-4 lg:px-20 xl:px-60">
                <h1 className="text-3xl font-semibold mb-2">Experience</h1>

                <p className="text-md text-gray-600 mb-2 align-middle">
                    Contrary to popular belief, you do not need to have prior experience with 
                    the competition to join the club. Many members join without any knowledge - 
                    VEX is a great learning experience and we are all very welcoming!
                </p>
            </div>
        </Layout>
    )
}