import { Link } from "react-router-dom"

function Home() {
    return (
    <>
    <div>
        <h1 className="text-xl">Hi, I'm Jeff.</h1>
        <p className="mt-4 text-muted">I'm a developer who enjoys building things, especially web apps and games.</p>
        <ul className="mt-8">
          <li>
            <Link to="/projects" className="hover:font-bold hover:underline">&gt; Projects</Link>
          </li>
          <li>
            <Link to="/arcade" className="hover:font-bold hover:underline">&gt; Arcade</Link>
          </li>
          <li>
            <Link to="/resume" className="hover:font-bold hover:underline">&gt; Resume</Link>
          </li>
        </ul>
    </div>
    </>
  )
}

export default Home