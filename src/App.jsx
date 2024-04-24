import './assets/App.css'
import Navbar from "./components/Navbar.jsx";


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

  return (
      <>

          <div className="bg-game-pattern border-red h-screen ">

              <Navbar/>
              <div className="grid mx-auto content-end items-center text-center">
              <h1 className="heavy-font text-8xl">GROG N GLORY</h1>
              <div className="items-center flex">
                  <a className="border " href="https://store.steampowered.com/app/2835500/Grog_n_Glory/">
                      <div className="video-container">
                          <video width={"320"} autoPlay loop muted className="video rounded-full opacity-90 ">
                              <source src="./public/grog-gameplay.mp4" type="video/mp4"/>
                              Your browser does not support the video tag.
                          </video>
                      </div>
                  </a>
                  <h1 className="heavy-font text-4xl ms-5 inline-block align-middle">Coming <br/>Soon</h1>
              </div>
              </div>
          </div>
          <div className="container">
              <ul id="cards">
                  <li className="card" id="card1">
                      <div className="card-body">
                          <h2>Card 1</h2>
                      </div>
                  </li>
                  <li className="card" id="card2">
                      <div className="card-body">
                          <h2>Card 2</h2>
                      </div>
                  </li>
                  <li className="card" id="card3">
                      <div className="card-body">
                          <h2>Card 3</h2>
                      </div>
                  </li>
                  <li className="card" id="card4">
                      <div className="card-body">
                          <h2>Card 4</h2>
                      </div>
                  </li>
              </ul>
          </div>
      </>
  )
}

export default App
