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
      <Navbar />
          <div className="bg-game-pattern bg-100"></div>
      </>
  )
}

export default App
