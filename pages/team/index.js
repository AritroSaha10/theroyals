import Image from "next/image"
import Link from 'next/link'

import DOMPurify from "isomorphic-dompurify";
import marked from "marked";

import Layout from "../../components/Layout"

import PeopleWorking from "../../public/images/people-working.jpg"

import ITZ from "../../public/images/timeline/2017-itz.png"
import TP from "../../public/images/timeline/2018-tp.png"
import TT from "../../public/images/timeline/2019-tt.png"
import CU from "../../public/images/timeline/2020-cu-2.png"

import ClubFairBoard from "../../public/images/clubfair-board.png"
import getFilesInDirectory from "../../util/getFilesInDirectory"

const DESCRIPTION_MAX_CHAR = 50;

export async function getStaticProps(context) {
    const allMembers = await getFilesInDirectory("team");

    const allMemberInfo = allMembers.map(fname => {
        const { attributes } = require(`../../content/team/${fname}.md`);

        let memberInfoFinal = {
            ...attributes,
            id: fname,
            description: DOMPurify.sanitize(marked(attributes.description), {ALLOWED_TAGS: []})
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

export default function Timeline({ allMemberInfo }) {
    return (
        <Layout name="Timeline">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 py-10 lg:px-20 xl:px-60 gap-8">
                {allMemberInfo.map(({ name, position, team, description, photo, id }, idx) => (
                    <Link href={`/team/${id}`} key={id}>
                        <a>
                            <div className="flex flex-col shadow-md hover:shadow-xl transform hover:scale-105 duration-500 bg-white rounded-lg cursor-pointer">
                                <Image
                                    src={photo}
                                    width={500}
                                    height={400}
                                    alt="Portrait"
                                    className="rounded-t-lg w-full"
                                    objectFit="cover"
                                    objectPosition="center"
                                />

                                <div className="p-4">
                                    <h1 className="text-xl font-medium">{name}</h1>
                                    <h2 className="text-gray-600 font-medium text-md">{position} {position && "| "}{team}</h2>
                                    <div className="text-gray-400 text-sm font-medium mb-2" dangerouslySetInnerHTML={{ __html: description }} />

                                    <small className="text-xs text-gray-400">Click on the card to see more...</small>
                                </div>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </Layout>
    )
}