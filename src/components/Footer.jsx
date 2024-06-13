import "bootstrap-icons/font/bootstrap-icons.css";
import {Link} from "react-router-dom";


const Footer = () => {

    let year = new Date().getFullYear();

    return (
        <section className="bg-white mt-12" >
            <div id="home" className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                    <div className="px-5 py-2">
                        <a href="#home" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Home
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#about" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                            About
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#team" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Team
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="#games" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Games
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <Link to="/contactus" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Contact
                        </Link>
                    </div>
                </nav>
                <div className="flex justify-center mt-8 space-x-6">
                    <a href="https://www.linkedin.com/company/gamingbug/?viewAsMember=true "
                       className="icon-linkedin text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Linkedin</span>
                        <i className="bi bi-linkedin"></i>

                    </a>
                    <a href="https://www.instagram.com/gamingbugstudio" className="icon-instagram text-gray-400">
                        <span className="sr-only">Instagram</span>
                        <i className="bi bi-instagram"></i>

                    </a>
                    <a href="https://x.com/GamingBugStudio" className="icon-twitter text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Twitter</span>
                        <i className="bi bi-twitter-x"></i>

                    </a>
                    <a href="https://discord.gg/BVZmKNvE" className="icon-discord text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Discord</span>
                        <i className="bi bi-discord"></i>

                    </a>
                    <a href="https://store.steampowered.com/app/2835500/Grog_n_Glory/"
                       className="icon-steam text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Steam</span>
                        <i className="bi bi-steam"></i>
                    </a>
                    <a href="https://www.youtube.com/@GamingBugStudio"
                       className="icon-youtube text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Steam</span>
                        <i className="bi bi-youtube"></i>
                    </a>


                </div>
                <p className="mt-8 text-base leading-6 text-center text-gray-400">
                    © {year} GamingBug, Inc. All rights reserved.
                </p>
            </div>
        </section>
    )

}

export default Footer;