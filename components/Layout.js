import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

import Link from "next/link";

import { BiLink } from "react-icons/bi";
import { useRouter } from "next/router";

import { motion } from "framer-motion";

const pageFadeIn = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0
    },
    transition: {
        duration: 0.4,
        type: "tween"
    }
};

export default function Layout({ name, children }) {
    const router = useRouter()
    const onHomePage = router.route == "/"

    return (
        <div 
            className="flex flex-col min-h-screen"
        >
            <Head>
                <title>{name} | JFSS Royals</title>
                <meta name="description" content="The website representing John Fraser's VEX Team: The Royals 82050." />
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:title" content={`${name} | JFSS Royals`} />
                <meta property="og:description" content="The website representing John Fraser's VEX Team: The Royals 82050." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/new-splash-3.jpg" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="2800" />
                <meta property="og:image:height" content="1800" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content={`${name} | JFSS Royals`} />
                <meta property="twitter:description" content="The website representing John Fraser's VEX Team: The Royals 82050." />
                <meta property="twitter:image:src" content="/images/new-splash-compressed.png" />

                <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

                <meta name="google-site-verification" content="NxIS9WMkJ1Bwz7t8rlvApmZgRAJYV9qvjf0sWHdJBLM" />
            </Head>

            {/*
            {name !== "Join Us" &&
                <div className="w-full p-4 md:px-8 bg-purple-700">
                    <p className="text-white text-center">
                        Applications are <b>open</b>! Find more information
                        {" "}
                        <Link href="/join-us">
                            <a className="text-blue-300 hover:text-blue-100 duration-150">
                                <BiLink className="inline mr-1" />
                                here
                            </a>
                        </Link>
                        .
                    </p>
                </div>
            }
        */}

            {!onHomePage && <Navbar />}

            <div className="flex-grow">
                {children}
            </div>

            <Footer />
        </div>
    )
}