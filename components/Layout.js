import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ name, children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>{name} | JFSS Royals</title>
                <meta name="description" content="The website representing the John Fraser Secondary School VEX Team: The Royals 82050." />
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:title" content={`${name} | JFSS Royals`} />
                <meta property="og:description" content="The website representing the John Fraser Secondary School VEX Team: The Royals 82050." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/logo-fill.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1920" />
                <meta property="og:image:height" content="960" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content={`${name} | JFSS Royals`} />
                <meta property="twitter:description" content="The website representing the John Fraser Secondary School VEX Team: The Royals 82050." />
                <meta property="twitter:image:src" content="/images/logo-fill.png" />

                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>

            <Navbar />

            <div className="flex-grow">
                {children}
            </div>

            <Footer />
        </div>
    )
}