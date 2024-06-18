const photos = import.meta.env.MODE === "development" ? "http://localhost:5173/public/" : "https://main--gamingbug.netlify.app/";


function Games() {

    return(
        <div className="bg-gray-300 p-5" id="games">
            <h1 className="heavy-font text-center text-4xl pt-24 pb-12">OUR GAMES</h1>

            <div className="container-slide">
              <h1 className="heavy-font text-4xl">About GROG N GLORY</h1>  <ul id="cards">
                    <li className="card mt-12" id="card1">

                        <div className="card-body bg-game-image1 bg-center bg-cover flex flex-col text-white overflow-auto place-content-center">

                            <h2 className="heavy-font text-lg lg:text-4xl md:text-4xl sm:text-2xl xl:text-4xl">Ship and Crew Management</h2>
                            <br/><br/>
                            <p className="text-xs max-w-96 lg:text-lg md:text-lg sm:text-sm xl:text-lg">
                                Command your own pirate ship and crew,
                                making decisions that would make even the
                                most seasoned buccaneer proud. Upgrade and
                                customize your ship to become the terror of the seven
                                seas. Choose your crew wisely, as their loyalty and skills        making decisions that would make even the
                                most seasoned buccaneer proud.</p>
                        </div>
                    </li>
                    <li className="card mt-12" id="card2">
                        <div
                            className="card-body bg-game-image2 bg-center bg-cover flex flex-col text-white overflow-auto place-content-center">
                            <h2 className="heavy-font text-lg lg:text-4xl md:text-4xl sm:text-2xl xl:text-4xl">Treasure Hunting</h2>
                            <br/><br/>
                            <p className="text-xs max-w-96 lg:text-lg md:text-lg sm:text-sm xl:text-lg">
                                Embark on a treasure hunt of epic proportions,
                                inspired by the legendary tales of pirate lore.
                                Seek hidden treasures and follow cryptic maps to uncover
                                riches beyond your wildest dreams. Each journey is a chapter
                                in your own pirate saga, filled with mystery and untold wealth.</p>
                        </div>
                    </li>
                <li className="card" id="card3">
                    <div
                        className="card-body bg-game-image3 bg-center bg-cover flex flex-col text-white overflow-auto place-content-center">
                        <h2 className="heavy-font text-lg lg:text-4xl md:text-4xl sm:text-2xl xl:text-4xl">Co-Op Gameplay</h2>
                        <br/><br/>
                        <p className="text-xs max-w-96 lg:text-lg md:text-lg sm:text-sm xl:text-lg">
                            Abide by the pirate's code and form alliances with your shipmates.
                            Team up to face perilous challenges, engage in epic naval battles,
                            and conquer the high seas together. Or, let treachery be your guide as
                            you betray your allies and claim the spoils for yourself.</p>
                    </div>
                </li>
                <li className="card pb-5" id="card4">
                    <div className="card-body flex flex-col text-white overflow-auto place-content-center">
                        <h2 className="heavy-font text-lg lg:text-4xl md:text-4xl sm:text-2xl xl:text-4xl">And More!</h2>
                        <br/>
                        <p className="text-xs max-w-96 sm:text-xl">
                            Go to one of our social media channels to learn more.</p>
                        <img
                            src={`${photos}/gameimage4.png`} className="w-24 sm:w-44 md:w-44 lg:w-44 xl:w-44 mt-12"/>
                        <div className="flex justify-center mt-8 space-x-6">
                            <a href="https://www.linkedin.com/company/gamingbug/?viewAsMember=true "
                               className="icon-linkedin text-black">
                                <span className="sr-only">Linkedin</span>
                                <i className="bi bi-linkedin"></i>

                            </a>
                            <a href="https://www.instagram.com/gamingbugstudio"
                               className="icon-instagram text-black">
                                <span className="sr-only">Instagram</span>
                                <i className="bi bi-instagram"></i>

                            </a>
                            <a href="#" className="icon-twitter text-black hover:text-gray-500">
                                <span className="sr-only">Twitter</span>
                                <i className="bi bi-twitter-x"></i>

                            </a>
                            <a href="https://discord.gg/BVZmKNvE"
                               className="icon-discord text-black ">
                                <span className="sr-only">Discord</span>
                                <i className="bi bi-discord"></i>

                            </a>
                            <a href="https://store.steampowered.com/app/2835500/Grog_n_Glory/"
                               className="icon-steam text-black hover:text-gray-500">
                                <span className="sr-only">Steam</span>
                                <i className="bi bi-steam"></i>
                            </a>
                            <a href="https://www.youtube.com/@GamingBugStudio"
                               className="icon-youtube text-black">
                                <span className="sr-only">Steam</span>
                                <i className="bi bi-youtube"></i>
                            </a>
                        </div>
                        </div>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Games;