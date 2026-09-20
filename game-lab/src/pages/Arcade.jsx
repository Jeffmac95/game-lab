import { useState } from "react"

function Arcade() {
    const [showDescription, setShowDescription] = useState(false);
    const [drawCanvas, setDrawCanvas] = useState(false);

    return (
        <div className="w-full mx-auto px-6">
            <h1 className="text-3xl text-center underline">Arcade</h1>

            <div className="flex flex-col md:flex-row mt-12 items-stretch">
                <aside className="w-full md:w-1/3 ml-2">
                    <h3 className="text-accent text-xl">Games:</h3>
                    <ul>
                        <li onClick={() => setShowDescription(prev => !prev)}
                        className="hover:cursor-pointer"
                        >
                            &gt; Milky Way Defender
                            <button
                                onClick={() => setDrawCanvas(prev => !prev)}
                                className="ml-2 border rounded-md px-2 py-1 hover:bg-accent hover:text-black">
                                {drawCanvas ? "Cancel" : "Play"}
                            </button>
                        </li>
                    </ul>
                    {showDescription && (
                        <div className="mt-2 max-w-md">
                            <p className="text-muted">
                                A 2D arcade-style space shooter where you defend against incoming asteroids.
                            </p>
                            <p>
                                Controls:
                                <br />
                                <span>Move Left = A</span>
                                <br />
                                <span>Move Right = D</span>
                                <br />
                                <span>Shoot = Spacebar</span>
                            </p>
                        </div>
                    )}
                </aside>
                {drawCanvas && (
                    <div className="w-full md:w-2/3 flex justify-baseline">
                        <iframe
                            src="/milkywaydefender/game/index.html"
                            width="600"
                            height="760"
                            className="border-0"
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Arcade