import { MdEmail } from "react-icons/md" 
import { FaInstagram, FaGithub } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="flex flex-col justify-between gap-4 px-20 py-8 bg-gray-100 text-sm items-center text-center">
            <div className="flex items-center gap-3 text-gray-500 text-xl">
                <a href="mailto:jfssvex@gmail.com" className="text-gray-500 hover:text-gray-800 duration-200">
                    <MdEmail />
                </a>

                <a href="https://www.instagram.com/jfss_royals/" className="text-gray-500 hover:text-gray-800 duration-200">
                    <FaInstagram />
                </a>

                <a href="https://github.com/jfssvex" className="text-gray-500 hover:text-gray-800 duration-200">
                    <FaGithub />
                </a>
            </div>

            <p className="text-gray-500 text-sm">
                Copyright &copy; 2021 The Royals. All Rights Reserved.
                Made by
                {" "}
                <a className="text-blue-500 hover:text-blue-700 duration-200" href="https://aritrosaha.vercel.app/" target="_blank" rel="noreferrer">
                    Aritro Saha
                </a>
                .
            </p>
        </footer>
    );
}