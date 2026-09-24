import { useState } from "react"

function Arcade() {
    const [selectedDescription, setSelectedDescription] = useState(null);
    const [selectedGame, setSelectedGame] = useState(null);

    return (
        <div className="w-full mx-auto px-6">
            <h1 className="text-3xl text-center underline">Arcade</h1>

            <div className="flex flex-col md:flex-row mt-12 items-stretch">
                <aside className="w-full md:w-1/3 ml-2">
                    <h3 className="text-accent text-xl">Games:</h3>
                    <ul className="w-fit">

                        <li onClick={() => setSelectedDescription(selectedDescription === "milky-way-def" ? null : "milky-way-def")}
                        className="hover:cursor-pointer"
                        >
                            <span className="mr-1">
                                {selectedDescription === "milky-way-def" ? "v" : ">"}
                            </span>
                            Milky Way Defender
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedGame("milky-way-def");
                                }}
                                className="ml-2 border rounded-md px-2 py-1 hover:bg-accent hover:text-black">
                                Play
                            </button>
                            {selectedDescription === "milky-way-def" && (
                                <p className="text-muted">
                                    A 2D space shooter
                                </p>
                            )}
                        </li>



                        <li onClick={() => setSelectedDescription(selectedDescription === "snake" ? null : "snake")} 
                        className="hover:cursor-pointer">
                            <span className="mr-1">
                                {selectedDescription === "snake" ? "v" : ">"}
                            </span>
                            Snake
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedGame("snake");
                                }}
                                className="ml-2 border rounded-md px-2 py-1 hover:bg-accent hover:text-black">
                                Play
                            </button>
                            {selectedDescription === "snake" && (
                                <p className="text-muted">
                                    Classic Snake
                                </p>
                            )}
                        </li>
                    </ul>
                </aside>

                {selectedGame === "milky-way-def" && (
                    <div className="w-full md:w-2/3 flex flex-col md:flex-row">
                        <iframe
                            src="/milkywaydefender/game/index.html"
                            width="600"
                            height="760"
                            className="border-0"
                        />
                        <p className="mt-2 md:mt-0 md:ml-4 text-sm text-muted">
                            <span className="text-accent">Controls: </span>
                            <br />
                            Move Left: A
                            <br />
                            Move Right: D
                            <br />
                            Shoot: Spacebar
                        </p>
                    </div>
                )}

                {selectedGame === "snake" && (
                    <div className="w-full md:w-2/3 flex flex-col md:flex-row">
                        <iframe 
                            src="/snake/index.html"
                            width="600"
                            height="600"
                            className="border-0"
                        />
                        <p className="mt-2 md:mt-0 md:ml-4 text-sm text-muted">
                            <span className="text-accent">Controls: </span>
                            W A S D
                        </p>
                    </div> 
                )}
            </div>
        </div>
    )
}

export default Arcade