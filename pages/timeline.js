import Image from "next/image"

import Layout from "../components/Layout"

import TimelineImg from "../public/images/vex-timeline.png"

import ITZ from "../public/images/timeline/2017-itz.png"
import TP from "../public/images/timeline/2018-tp.png"
import TT from "../public/images/timeline/2019-tt.png"
import CU from "../public/images/timeline/2020-cu-2.png"

import TiP from "../public/images/team-photos/tipping-point/everyone.jpg"

export default function Timeline() {
    return (
        <Layout name="Timeline">
            <header className="h-44 relative">
                {/* Background image using Next.js Image, taken from here: https://github.com/vercel/next.js/discussions/18357#discussioncomment-132523 */}
                <Image
                    layout="fill"
                    className="object-center object-cover pointer-events-none filter blur-sm"
                    src={TimelineImg}
                    alt=""
                />

                <div className="flex items-center justify-center relative z-1 h-full bg-opacity-60 bg-black">
                    <div className="mx-2 text-center">
                        <h1 className="text-gray-500 font-bold text-4xl lg:text-5xl">
                            <span className="text-white">Timeline</span>
                        </h1>
                    </div>
                </div>
            </header>

            <div className="flex flex-col xl:flex-row text-center lg:text-left px-10 pt-6 pb-2 lg:px-20 xl:px-60 lg:pt-12 lg:pb-4">
                <div className="xl:w-2/3">
                    <h1 className="text-3xl font-semibold mb-2">In The Zone (2017 - 2018)</h1>

                    <p className="text-md text-gray-600 mb-2">
                        Our club began in the 2017/18 In the Zone challenge, with our only team being 82050A.
                        We received funding from our school, John Fraser SS, to purchase our first Cortex system,
                        and found space in one of our technology classrooms to hold meetings. This room became our
                        home for years to come!
                    </p>

                    <p className="text-md text-gray-600 mb-2">
                        Almost everyone was new to VEX, which made the year a great learning opportunity. With a total of 6
                        members, we were able to build a robot during lunch breaks and after school sessions thanks to our amazing
                        teacher supervisors (Ms. McEwen and Mr. Lightbody). After the holidays, our first robot was ready to compete.
                    </p>

                    <p className="text-md text-gray-600 mb-2">
                        With the robot complete, the team was able to attend our first competition, the iDesign Central Toronto Qualifying event.
                        We won 3 out of 7 matches, ranking 30th out of 60 teams - a great learning experience once again! We were unable to attend
                        our other registered event, and with that, our season came to a close.
                    </p>

                    <p className="text-md text-gray-600 mb-6">
                        Many of our members graduated that year, leaving 2 to continue with the team. As such, the team had to expand and rebuild the
                        following year.
                    </p>
                </div>

                <div className="flex flex-col xl:flex-row gap-6 ml-4 xl:w-1/3">
                    <Image 
                        src={ITZ} 
                        width={600} 
                        height={400} 
                        quality={90} 
                        objectFit="cover" 
                        objectPosition="center" 
                        className="rounded-lg" 
                        placeholder="blur" 
                        alt="Robots playing on In the Zone field"
                    />
                </div>
            </div>

            <div className="flex flex-col xl:flex-row-reverse text-center lg:text-left px-10 pt-6 pb-2 lg:px-20 xl:px-60 lg:pt-12 lg:pb-4">
                <div className="xl:w-2/3">
                    <h1 className="text-3xl font-semibold mb-2">Turning Point (2017 - 2018)</h1>

                    <p className="text-md text-gray-600 mb-2">
                        Turning Point was our second season in competition, and we brought on several new members at the beginning of this year, 
                        many of whom are still on the team today. Once again, we only had one team (82050A), and the season was a great learning opportunity 
                        for all members.
                    </p>

                    <p className="text-md text-gray-600 mb-2">
                        This year we kept a similar schedule for our meetings with our teacher supervisors, but were also able to take it home over our winter 
                        holidays to work on it while school was off. Our strategist Rishabh and his family were gracious enough to host meetings at their home 
                        so we were able to get even more hands on working time with the robot than in the first year.
                    </p>

                    <p className="text-md text-gray-600 mb-2">
                        We competed in two events in February: the Brampton Robotics VRC Qualifying event, and the iDesign Central Toronto VRC Qualifying Event. 
                        Unfortunately, we were not able to win any matches at our first event in Brampton but we took the time until the next competition to make 
                        improvements, leading to our first ever elimination selection at Central Toronto.
                    </p>

                    <p className="text-md text-gray-600 mb-6">
                        This being the first season for the majority of our team members, it was a great formative experience. We learned a lot about the robotics 
                        design process and were eager to continue improving into the next season.
                    </p>
                </div>

                <div className="flex flex-col xl:flex-row gap-6 mr-4 xl:w-1/3">
                    <Image 
                        src={TP} 
                        width={600} 
                        height={400} 
                        quality={90} 
                        objectFit="cover" 
                        objectPosition="center" 
                        className="rounded-lg" 
                        placeholder="blur" 
                        alt="Team with robot during Tipping Point"
                    />
                </div>
            </div>

            <div className="flex flex-col xl:flex-row text-center lg:text-left px-10 pt-6 pb-2 lg:px-20 xl:px-60 lg:pt-12 lg:pb-4">
                <div className="xl:w-2/3">
                    <h1 className="text-3xl font-semibold mb-2">Tower Takeover (2019 - 2020)</h1>

                    <p className="text-md text-gray-600 mb-2">
                        A lot of things changed for our club during the Tower Takeover season. Our school was able to fund the purchase of a V5 system, 
                        giving our team new technology to build our robots after competing in the last season with Cortex. This was also the inaugural season for 
                        our second team, 82050B. As such, both 82050A and 82050B were going to compete. Once again, we were able to run thanks to our amazing teacher 
                        supervisors: Ms. McEwen and Mr. Lightbody.  
                    </p>

                    <p className="text-md text-gray-600 mb-2">
                        With a better understanding of the design process, our older members were able to teach new members based on their experiences. This allowed us to 
                        run teaching sessions so that knowledge could be passed on. Both teams were able to CAD their robots and iteratively improve in order to be successful.
                    </p>

                    <p className="text-md text-gray-600 mb-2">
                        With both teams working throughout the season on their bots, we were able to compete at multiple competitions. Both teams competed at Appleby College event, with 
                        82050A also competing at the St. Catherines regional and Collingwood qualifier. Due to their skills score, 82050A was able to qualify for the Ontario Provincial Championship, 
                        with it being the first time the school club had attended.
                    </p>

                    <p className="text-md text-gray-600 mb-2">
                        After further refining of the bot, 82050A competed at the Provincial championship and won 5/7 qualifying matches. As such, they successfully made it to eliminations! After a great run, 
                        the team lost a close match in the R-16 round, meaning that the season had come to an end.
                    </p>

                    <p className="text-md text-gray-600 mb-6">
                        This season was an amazing experience for all members, being the most successful year so far. Our members were more excited than ever for the new season.
                    </p>
                </div>

                <div className="flex flex-col xl:flex-row gap-6 ml-4 xl:w-1/3">
                    <Image 
                        src={TT} 
                        width={600} 
                        height={400} 
                        quality={90} 
                        objectFit="cover" 
                        objectPosition="center" 
                        className="rounded-lg" 
                        placeholder="blur"
                        alt="Team with robot during Tower Takeover"
                    />
                </div>
            </div>

            <div className="flex flex-col xl:flex-row-reverse text-center lg:text-left px-10 pt-6 pb-2 lg:px-20 xl:px-60 lg:pt-12 lg:pb-4">
                <div className="xl:w-2/3">
                    <h1 className="text-3xl font-semibold mb-2">Change Up (2020 - 2021)</h1>

                    <p className="text-md text-gray-600 mb-2">
                        With the COVID-19 pandemic still ongoing, the Change Up season has been very different for us. We were unable to have run both teams due to 
                        gathering restrictions, so only 82050A will be competing this year. Instead, our senior members are using the time to teach new members the 
                        fundamentals of building, programming, and the design process so that they are better equipped for the next year, while simultaneously building a 
                        robot for 82050A. Our team is also very thankful for our new teacher supervisor, Mr. Ghorvei, who has been hosting socially-distanced meetings for 
                        us in the tech classrooms of our school where we worked on building a DIY perimeter kit.
                    </p>

                    <p className="text-md text-gray-600 mb-2">
                        Until this season, we had gotten by without one, but due to the online nature of most competitions this year, our team needed a perimeter in order to 
                        record and post skills runs. With funding from our school and an enormous amount of help from Mr. Ghorvei, we were able to build a functional perimeter 
                        out of wooden planks that satisfy REC requirements. Now, we can compete in online events as well as practice skills in a proper environment.
                    </p>

                    <p className="text-md text-gray-600 mb-2">
                        After a plethora of competitions and hard work, the team were able to win the Design Award in the Provincial championship, qualifying them for the 
                        VEX World Championship! Due to the COVID-19 pandemic, all teams had to compete online in two, completely new and different formats: Live Remote Skills (LRS) and 
                        Live Remote Tournament (LRT). After a lot of finetuning the robot, we were able to get the Innovate Award in our division on an international level.
                    </p>

                    <p className="text-md text-gray-600 mb-6">
                        Once again, this season had been our most successful yet, and has been an amazing experience for all of our team members. We&apos;ve never been more eager to start
                        yet another season.
                    </p>
                </div>

                <div className="flex flex-col xl:flex-row gap-6 mr-4 xl:w-1/3">
                    <Image 
                        src={CU} 
                        width={600} 
                        height={400} 
                        quality={90} 
                        objectFit="cover" 
                        objectPosition="center" 
                        className="rounded-lg"
                        placeholder="blur" 
                        alt="Team with design award banner and robot during Change Up"
                    />
                </div>
            </div>

            <div className="flex flex-col xl:flex-row text-center lg:text-left px-10 pt-6 pb-2 lg:px-20 xl:px-60 lg:pt-12 lg:pb-4">
                <div className="xl:w-2/3">
                    <h1 className="text-3xl font-semibold mb-2">Tipping Point (2021 - 2022)</h1>

                    <p className="text-md text-gray-600 mb-2">
                        As the COVID-19 pandemic started to ease, we were able to finally run both teams, as well as meet together and work on the robots! 
                        We started work in early July, meeting up online and planning out strategies, doing CAD work, and placing the framework for our codebases.
                    </p>

                    <p className="text-md text-gray-600 mb-2">
                        While we continued to work online for the summer, we were only able to start up regular meetings near the start of the school year. Here, both teams started
                        to work on implementing their designs, experimenting, and testing. By the end of December, we had two robots from both teams, both ready to compete. 
                    </p>

                    <p className="text-md text-gray-600 mb-2">
                        Unfortunately, due to a new wave of COVID-19 cases and other issues, we were unable to attend any competitions before provincials, leading our season to end.
                        Despite the ending of our season, we were still active, teaching the general members for when they join the teams next year. As the new season approaches, we&apos;re
                        excited to get started on new challenges.
                    </p>

                    {/*
                    <p className="text-md text-gray-600 mb-6">
                        However, with a sizable amount of grade 12 members leaving, that means that we're going to need more hardworking, dedicated individuals. That&apos;s why
                        {" "}
                        <b>applications are open</b>! Curious? Check out  
                        {" "}
                        <Link href="/join-us">
                            <a className="text-blue-500 hover:text-blue-700 duration-150">
                                this page
                            </a>
                        </Link>
                        {" "}
                        for more information.
                    </p>
                    */}
                </div>

                <div className="flex flex-col xl:flex-row gap-6 ml-4 xl:w-1/3">
                    <Image 
                        src={TiP} 
                        width={600} 
                        height={400} 
                        quality={90} 
                        objectFit="cover" 
                        objectPosition="center" 
                        className="rounded-lg" 
                        placeholder="blur" 
                        alt="Team A, Team B, and general members with both teams' robots during Tipping Point"
                    />
                </div>
            </div>
        </Layout>
    )
}