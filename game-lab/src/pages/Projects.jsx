function Projects() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="border-b-2 text-3xl">Projects</h1>

            <div className="flex flex-col justify-center items-center mt-8 p-4 border-t-2 border-b-2">
                <h2 className="text-xl">Worklog System</h2>
                <img src="/worklog/auth-page.png"
                alt="Log in page"
                className="max-w-85 max-h-85"
                />
                <p className="max-w-2xl">
                    A full-stack time tracking app I built to keep track of how I spend my time. Users can create an account, use a fully functioning timer, log activities, search/edit/delete entries.
                    <br/>
                    <span className="text-muted">Client side: React, Vite, TypeScript, and Tailwind CSS</span>
                    <br />
                    <span className="text-muted">Server side: Express/Node.js, PostgreSQL, Drizzle ORM, and JWT authentication</span>
                </p>
                <div className="flex">
                    <img src="/worklog/dashboard.png"
                    alt="Dashboard"
                    className="max-w-200 max-h-175 px-3"
                    />
                    <img src="/worklog/running.png"
                    alt="Components running"
                    className="max-w-200 max-h-175"
                    />
                </div>

            </div>

            <div className="flex flex-col justify-center items-center mt-8 p-4 border-t-2 border-b-2">
                <h2 className="text-xl">Milky Way Defender</h2>
                <img src="/milkywaydefender/example_imgs/shooting.png"
                alt="Rocket shooting"
                className="max-w-120 max-h-120"
                />
                <p className="max-w-2xl">
                    A 2D arcade-style space shooter. Defend against incoming asteroids with the difficulty increasing over time. Includes score and accuracy tracking, sound effects, music, and particle effects for collision.
                    <br />
                    <span className="text-muted">Tech: Java 21, LibGDX 1.12.1, LWJGL3, and Gradle</span>
                </p>
                <div className="flex">
                    <img src="/milkywaydefender/example_imgs/animations.png"
                    alt="Moving rocket"
                    className="max-w-200 max-h-175 px-3"
                    />
                    <img src="/milkywaydefender/example_imgs/particles.png"
                    alt="Particle from bullet-rock collision"
                    className="max-w-200 max-h-175"
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-8 p-4 border-t-2 border-b-2">
                <h2 className="text-xl">Pixcraft</h2>
                <img src="/pixcraft/hi.png"
                alt="Smiley face saying hi"
                className="max-w-150 max-h-150"
                />
                <p className="max-w-2xl">
                    A 2D pixel art editor I built to make drawing pixel art for games convenient. Includes resizable canvas, multiple layers, drawing and shape/line tool, canvas transformation(flip, rotate), image import/export, undo functionality, color picker, and pallete of previously used colors to pick from.
                    <br />
                    <span className="text-muted">Tech: C++, Raylib, Raygui, and CMake</span>
                </p>
                <div className="flex">
                    <img src="/pixcraft/layering1.png"
                    alt="Showing layering of canvas'"
                    className="max-w-180 max-h-160 px-3"
                    />
                    <img src="/pixcraft/layering2.png"
                    alt="Different layer selected"
                    className="max-w-180 max-h-160"
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-8 p-4 border-t-2 border-b-2">
                <h2 className="text-xl">Tincan</h2>
                <img src="/tincan/initjoin.png"
                alt="User joined room text"
                className="max-w-150 max-h-150"
                />
                <p className="max-w-2xl">
                    A real time chat app in the terminal. Includes multiple client support, multi-threaded server, chatrooms, colored text, and simple command protocol.
                    <br />
                    <span className="text-muted">Tech: Java 21, TCP Sockets</span>
                </p>
                <div className="flex">
                    <img src="/tincan/initjoin3.png"
                    alt="Multiple users join server"
                    className="max-w-175 max-h-175 px-3"
                    />
                    <img src="/tincan/createroom.png"
                    alt="Creating a room"
                    className="max-w-175 max-h-175"
                    />
                </div>
                <div className="flex">
                    <img src="/tincan/initjoin2.png"
                    alt="Other user joins server"
                    className="max-w-175 max-h-175 px-3"
                    />
                    <img src="/tincan/chatworking.png"
                    alt="Two users chatting"
                    className="max-w-175 max-h-175"
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects