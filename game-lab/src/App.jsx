import { Routes, Route, Link } from 'react-router-dom'

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Arcade from "./pages/Arcade"

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <nav className="flex flex-row px-6 py-4">
          <h2>Jeffrey MacPherson</h2>
          <ul className="ml-auto flex gap-8 text-muted">
            <li>
              <Link to="/" className="hover:text-page-text">Home</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-page-text">Projects</Link>
            </li>
            <li>
              <Link to="/arcade" className="hover:text-page-text">Arcade</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/arcade" element={<Arcade />} />
        </Routes>
      </main>

      <footer className="flex">
        <span className="text-muted text-xs ml-auto">v0.1</span>
      </footer>
    </div>
  )
}

export default App