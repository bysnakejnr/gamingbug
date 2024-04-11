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

          <div className="bg-game-pattern border-red h-screen  ">

          <Navbar/>
              <h1 className="heavy-font text-8xl mt-40 ms-40">GROG N GLORY</h1>
              <div className="ms-40 items-center flex">
                  <a className="border " href="https://store.steampowered.com/app/2835500/Grog_n_Glory/">
                      <div className="video-container">
                      <video width={"320"} autoPlay loop muted className="video rounded-full opacity-90 ">
                          <source src="./public/grog-gameplay.mp4" type="video/mp4"/>
                          Your browser does not support the video tag.
                      </video>
                      </div>
                  </a>
                  <h1 className="heavy-font text-4xl ms-5 inline-block align-middle">Coming <br />Soon</h1>
              </div>

          </div>
          <h1>Hello</h1>
      </>
  )
}

export default App
