import Image from "next/image"
import Link from 'next/link'
import Layout from "../../components/Layout"

// CMS data extraction
import DOMPurify from "isomorphic-dompurify";
import { marked } from 'marked';
import getFilesInDirectory from "../../util/getFilesInDirectory"

// Animations
import { motion } from "framer-motion"
import transition from "../../components/Transitions";

// Images
import PeopleWorking from "../../public/images/people-working.jpg"

const DESCRIPTION_MAX_CHAR = 50;

export async function getStaticProps(context) {
    const allMembers = await getFilesInDirectory("team");

    const allMemberInfo = allMembers.map(fname => {
        const { attributes } = require(`../../content/team/${fname}.md`);

        let memberInfoFinal = {
            ...attributes,
            id: fname,
            description: DOMPurify.sanitize(marked(attributes.description), { ALLOWED_TAGS: [] })
        };

        memberInfoFinal.description = memberInfoFinal.description.length > DESCRIPTION_MAX_CHAR ? memberInfoFinal.description.slice(0, DESCRIPTION_MAX_CHAR) + "..." : memberInfoFinal.description;

        return memberInfoFinal;
    });

    return {
        props: {
            allMemberInfo
        }
    }
}

export default function TeamPage({ allMemberInfo }) {
    const membersTeamA = allMemberInfo.filter(({ team }) => team === "Team A");
    const membersTeamB = allMemberInfo.filter(({ team }) => team === "Team B");

    return (
        <Layout name="Team">
            <header className="h-44 relative">
                {/* Background image using Next.js Image, taken from here: https://github.com/vercel/next.js/discussions/18357#discussioncomment-132523 */}
                <Image
                    layout="fill"
                    className="object-center object-cover pointer-events-none filter blur-sm"
                    src={PeopleWorking}
                    alt="Timeline"
                />

                <div className="flex items-center justify-center relative z-1 h-full bg-opacity-60 bg-black">
                    <div className="mx-2 text-center">
                        <h1 className="text-gray-500 font-bold text-4xl lg:text-5xl">
                            <span className="text-white">Team</span>
                        </h1>
                    </div>
                </div>
            </header>

            <div className="px-10 py-10 lg:px-20 xl:px-60">
                <h1 className="text-3xl font-semibold mb-6">Team A (82050A)</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {membersTeamA.map(({ name, position, team, description, photo, id }, idx) => (
                        <motion.div 
                            layout
                            initial={{
                                opacity: 0,
                                y: 60
                            }}
                            animate={{ 
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                ...transition,
                                delay: idx * 0.1,
                                duration: 0.4
                            }}
                            key={id}
                        >
                            <Link href={`/team/${id}`} key={id}>
                                <a>
                                    <div className="flex flex-col shadow-md hover:shadow-xl transform hover:scale-105 duration-500 bg-white rounded-lg cursor-pointer">
                                        {/*
                                        <motion.figure
                                            layoutId={`photo-${id}`}
                                            animate={{
                                                transition: { duration: 0.6, ...transition },
                                            }}
                                        >
                                            <Image
                                                src={photo}
                                                width={500}
                                                height={400}
                                                alt="Portrait"
                                                className="rounded-t-lg w-full"
                                                objectFit="cover"
                                                objectPosition="center"
                                            />
                                        </motion.figure>
                                        */}

                                        <div className="p-4">
                                            <h1 className="text-xl font-medium">{name}</h1>
                                            <h2 className="text-gray-600 font-medium text-md">{position} {position && "| "}{team}</h2>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="px-10 py-10 lg:px-20 xl:px-60">
                <h1 className="text-3xl font-semibold mb-6">Team B (82050B)</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {membersTeamB.map(({ name, position, team, description, photo, id }, idx) => (
                        <motion.div 
                            layout
                            initial={{
                                opacity: 0,
                                y: 60
                            }}
                            animate={{ 
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                ...transition,
                                delay: (idx + 2) * 0.1,
                                duration: 0.4,
                            }}
                            key={id}
                        >
                            <Link href={`/team/${id}`} key={id}>
                                <a>
                                    <div className="flex flex-col shadow-md hover:shadow-xl transform hover:scale-105 duration-500 bg-white rounded-lg cursor-pointer">
                                        {/*
                                        <motion.figure
                                            layoutId={`photo-${id}`}
                                            animate={{
                                                transition: { duration: 0.6, ...transition },
                                            }}
                                        >
                                            <Image
                                                src={photo}
                                                width={500}
                                                height={400}
                                                alt="Portrait"
                                                className="rounded-t-lg w-full"
                                                objectFit="cover"
                                                objectPosition="center"
                                            />
                                        </motion.figure>
                                        */}

                                        <div className="p-4">
                                            <h1 className="text-xl font-medium">{name}</h1>
                                            <h2 className="text-gray-600 font-medium text-md">{position} {position && "| "}{team}</h2>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}