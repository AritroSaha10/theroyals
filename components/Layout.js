import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ name, children }) {
    return (
        <div>
            <Head>
                <title>{name} | JFSS Royals</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <div>
                {children}
            </div>
        </div>
    )
}