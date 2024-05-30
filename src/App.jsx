import './assets/App.css'
import Navbar from "./components/Navbar.jsx";
import Games from "./components/Games.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
function App() {


        const handleVideoClick = () => {
            window.location.href = 'https://store.steampowered.com/app/2835500/Grog_n_Glory/';
        };

  return (
      <>

          <div className="bg-game-pattern border-red h-screen ">
              <Navbar/>
              <div className="main-container">

                      <h1 className="heavy-font text-8xl">GROG N GLORY!</h1>


<div className="container3 sm:flex-row flex-col">
                          <div className="container2 m-4">
                                  <video width={"320"} autoPlay loop muted className="image rounded-full opacity-90" onClick={handleVideoClick}>
                                      <source src="./public/grog-gameplay.mp4" type="video/mp4"/>
                                      Your browser does not support the video tag.
                                  </video>
                                  <div className="overlay" onClick={handleVideoClick}>

                                      <div className="text"><i className="bi bi-steam mx-2"></i>Go to game</div>
                                  </div>
                          </div>
                  <div className="container2">
                  <div className="justify-center items-center sm:text-left text-center"><h1 className="heavy-font text-4xl">Coming <br/>Soon!</h1></div>
                  </div>
</div>





              </div>
              <div className="trans-background max-w-sm mt-24 rounded overflow-hidden shadow-md">

                  <div className="px-6 py-4">
                  <div className="heavy-font text-xl mb-2">Who are we?</div>
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
                         className="items-end text-end justify-end bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Learn
                          More</a>

                  </div>
              </div>
          </div>

          <Games/>
      </>
  )
}

export default App
