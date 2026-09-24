function Projects() {
    return (
        <div className="flex flex-col items-center px-6">
            <h1 className="text-3xl underline">Projects</h1>

            <div className="flex flex-col justify-center items-center mt-8 p-4 border-t self-stretch">
                <h2 className="text-xl text-accent py-4">Worklog System</h2>

                <div className="flex flex-col md:flex-row items-center">
                    <img src="/worklog/auth-page.jpg"
                    alt="Log in page"
                    className="w-full max-w-sm px-3"
                    />
                    <img src="/worklog/running.jpg"
                    alt="Components running"
                    className="w-full max-w-sm px-3"
                    />
                    <p className="w-full max-w-2xl px-4">
                        A full-stack time tracking app I built to keep track of how I spend my time. Users can create an account, use a fully functioning timer, log activities, search/edit/delete entries.
                        <br/>
                        <span className="text-muted">Client side: React, Vite, TypeScript, and Tailwind</span>
                        <br />
                        <span className="text-muted">Server side: Express/Node.js, PostgreSQL, Drizzle ORM, and JWT authentication</span>
                    </p>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-8 p-4 border-t self-stretch">
                <h2 className="text-xl text-accent py-4">Milky Way Defender</h2>

                <div className="flex flex-col md:flex-row items-center">
                    <p className="w-full max-w-2xl px-4">
                        A 2D arcade-style space shooter. Defend against incoming asteroids with the difficulty increasing over time. Includes score and accuracy tracking, sound effects, music, and particle effects for collision.
                        <br />
                        <span className="text-muted">Tech: Java 21, LibGDX 1.12.1, LWJGL3, and Gradle</span>
                    </p>
                    <img src="/milkywaydefender/example_imgs/animations.jpg"
                    alt="Moving rocket"
                    className="w-full max-w-sm px-3"
                    />
                    <img src="/milkywaydefender/example_imgs/particles.jpg"
                    alt="Particle from bullet-rock collision"
                    className="w-full max-w-sm px-3"
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-8 p-4 border-t self-stretch">
                <h2 className="text-xl text-accent py-4">Pixcraft</h2>

                <div className="flex flex-col md:flex-row items-center">
                    <img src="/pixcraft/hi.jpg"
                    alt="Smiley face saying hi"
                    className="w-full max-w-sm px-3"
                    />
                    <img src="/pixcraft/layering.jpg"
                    alt="Showing layering of canvas'"
                    className="w-full max-w-sm px-3"
                    />
                    <p className="w-full max-w-2xl px-4">
                        A 2D pixel art editor I built to make drawing pixel art for games convenient. Includes resizable canvas, multiple layers, drawing and shape/line tool, canvas transformation(flip, rotate), image import/export, undo functionality, color picker, and palette of previously used colors to pick from.
                        <br />
                        <span className="text-muted">Tech: C++, Raylib, Raygui, and CMake</span>
                    </p>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-8 p-4 border-t self-stretch">
                <h2 className="text-xl text-accent py-4">Tincan</h2>

                <div className="flex flex-col md:flex-row items-center">
                    <p className="w-full max-w-2xl px-4">
                        A real time chat app in the terminal. Includes multiple client support, multi-threaded server, chatrooms, colored text, and simple command protocol.
                        <br />
                        <span className="text-muted">Tech: Java 21, TCP Sockets</span>
                    </p>
                    <img src="/tincan/initialjoin.jpg"
                    alt="Multiple users join server"
                    className="w-full max-w-lg px-3"
                    />
                    <img src="/tincan/chatworking.jpg"
                    alt="Two users chatting in the server"
                    className="w-full max-w-lg px-3"
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects