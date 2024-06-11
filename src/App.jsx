import './assets/App.css'
import Navbar from "./components/Navbar.jsx";
import Games from "./components/Games.jsx";
import Team from "./components/Team.jsx";
import Footer from "./components/Footer.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import {Link} from "react-router-dom";
import { motion } from "framer-motion"


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
function App() {

        const handleVideoClick = () => {
            window.location.href = 'https://store.steampowered.com/app/2835500/Grog_n_Glory/';
        };



  return (
      <>

          <div className="bg-game-pattern border-red h-screen bg-cover main-page-div">
              <Navbar />
              <div className="main-container">

                      <h1 className="heavy-font text-8xl">GROG N GLORY!</h1>


<div className="container3 sm:flex-row flex-col">
                          <div className="container2 m-4">
                                  <video width={"320"} autoPlay loop muted className="image border-8 border-black rounded-full opacity-90" onClick={handleVideoClick}>
                                      <source src="./public/grog-gameplay.mp4" type="video/mp4"/>
                                      Your browser does not support the video tag.
                                  </video>
                                  <div className="overlay" onClick={handleVideoClick}>

                                      <div className="text"><i className="bi bi-steam mx-2"></i>Go to game</div>
                                  </div>
                          </div>
                  <div className="container2">
                  <div className="justify-center items-center sm:text-left text-center"><h1 className="heavy-font text-4xl mb-12">Coming <br/>Soon!</h1></div>
                  </div>
</div>





              </div>
              <div className="trans-background mx-auto max-w-sm mt-72 rounded overflow-hidden shadow-md">

                  <div className="px-6 py-4">
                  <div className="heavy-font text-xl mb-2" id="about">Who are we?</div>
                      <p className="text-gray-700 font-medium text-base">
                          We’re not your average game development studio – we’re a tribe of experienced developers and
                          designers who are passionate about creating games that are both fun and innovative. We don’t
                          just create games, we create experiences.
                          Gaming Bug is a dynamic and innovative game development studio that thrives on crafting
                          unforgettable experiences for players of all ages.
                      </p>
                  </div>
                  <div className="px-6 pt-4 items-end justify-end text-end pb-2">
                      <a href="#"
                         className="hidden items-end text-end justify-end bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Learn
                          More</a>

                  </div>
              </div>
          </div>
            <div id="games">
          <Games />
            </div>
          <Team />
          <motion.div
              animate={{x: [800, 0]}}
              transition={{type: "spring", stiffness: 100, ease: "easeOut", duration: 0.3}}

              className="text-center mt-36 text-4xl bg-gray-300 p-20 mx-auto">
              <h1 className="heavy-font">Have Questions?</h1>
              <Link to="/contactus"
                 className="mt-6 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span
    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Contact Us!
</span>
              </Link>
          </motion.div>
          <Footer/>
      </>
  )
}

export default App
