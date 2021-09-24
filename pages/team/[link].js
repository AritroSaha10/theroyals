import Link from 'next/link'
import Image from "next/image";
import Layout from "../../components/Layout";

import marked from 'marked';
import DOMPurify from 'isomorphic-dompurify';

import getFilesInDirectory from "../../util/getFilesInDirectory"

import PeopleWorking from "../../public/images/people-working.jpg"

export async function getStaticPaths(context) {
    const allMembersRaw = await getFilesInDirectory("team");

    const allMembers = allMembersRaw.map((fname) => ({
        params: {
            link: fname.toString()
        }
    }));

    return {
        paths: allMembers,
        fallback: false
    };
}

export async function getStaticProps(context) {
    const { attributes } = require(`../../content/team/${context.params.link}.md`);

    let memberInfoFinal = {
        ...attributes,
        id: context.params.link,
        description: DOMPurify.sanitize(marked(attributes.description))
    };

    return {
        props: {
            memberInfo: memberInfoFinal
        }
    }
}

export default function TeamMember({ memberInfo }) {
    return (
        <Layout name={memberInfo.name} noHeader>
            <header className="h-44 relative">
                {/* Background image using Next.js Image, taken from here: https://github.com/vercel/next.js/discussions/18357#discussioncomment-132523 */}
                <Image
                    layout="fill"
                    className="object-center object-cover pointer-events-none filter blur-sm"
                    src={PeopleWorking}
                    alt="Timeline"
                />

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:justify-between relative z-1 h-full bg-opacity-60 bg-black px-16 md:px-24 lg:px-32">
                    <div className="mx-2 text-center">
                        <h1 className="text-gray-500 font-bold text-4xl lg:text-5xl">
                            <span className="text-white">Team</span>
                        </h1>
                    </div>

                    <Link href="/team">
                        <a className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded duration-300">The Team</a>
                    </Link>
                </div>
            </header>

            <div className="flex flex-col lg:flex-row px-10 py-2 lg:px-20 lg:py-4 xl:px-60 xl:py-10 items-center">
                <Image src={memberInfo.photo} className="w-1/5 rounded-md" alt="Person" height={500} width={400} objectPosition="center" objectFit="cover" />
                <div className="lg:ml-5 flex flex-col w-4/5 items-center lg:items-start">
                    <h1 className="text-black text-4xl font-semibold text-center">{memberInfo.name}</h1>
                    <h3 className="text-gray-500 text-md text-center">{memberInfo.position} {memberInfo.position && "| "}{memberInfo.team}</h3>

                    <br />

                    <div className="text-center lg:text-left" dangerouslySetInnerHTML={{ __html: memberInfo.description }} />
                </div>
            </div>
        </Layout>
    );

}