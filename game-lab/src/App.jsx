
function App() {

  return (
    <>
    <div className="flex min-h-screen flex-col">
      <header>
        <nav className="flex flex-row px-6 py-4">
          <h2>Jeffrey MacPherson</h2>
          <ul className="ml-auto flex gap-8 text-muted">
            <li>
              <a href="/" className="hover:text-page-text">Home</a>
            </li>
            <li>
              <a href="/projects"className="hover:text-page-text">Projects</a>
            </li>
            <li>
              <a href="/arcade"className="hover:text-page-text">Arcade</a>
            </li>
            <li>
              <a href="/resume" className="hover:text-page-text">Resume</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col flex-1 justify-center items-center">
        <h1 className="text-xl">Hi, I'm Jeff.</h1>
        <p className="mt-4 text-muted">I'm a developer who enjoys building things, especially web apps and games.</p>
        <ul className="mt-8">
          <li>
            <a href="/projects" className="hover:font-bold hover:underline">&gt; Projects</a>
          </li>
          <li>
            <a href="/arcade" className="hover:font-bold hover:underline">&gt; Arcade</a>
          </li>
          <li>
            <a href="/resume" className="hover:font-bold hover:underline">&gt; Resume</a>
          </li>
        </ul>
      </main>

      <footer className="flex">
        <span className="text-muted text-xs ml-auto">v0.1</span>
      </footer>
    </div>

    </>
  )
}

export default App
