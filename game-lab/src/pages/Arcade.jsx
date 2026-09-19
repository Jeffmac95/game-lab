import { useState } from "react"

function Arcade() {
    const [showDescription, setShowDescription] = useState(false);
    const [drawCanvas, setDrawCanvas] = useState(false);

    return (
        <div>
            <h1 className="text-3xl text-center">Arcade</h1>

            {drawCanvas && (
                <div className="max-w-md">
                    <iframe
                        src="/milkywaydefender/game/index.html"
                        width="600"
                        height="760"
                        className="border-0"
                    />
                </div>
            )}

            <aside className="mt-12 ml-2">
                Games:
                <ul>
                    <li onClick={() => setShowDescription(prev => !prev)}
                    className="hover:cursor-pointer"
                    >
                        &gt; Milky Way Defender
                        <button
                            onClick={() => setDrawCanvas(prev => !prev)}
                            className="ml-2 border rounded-md px-2 py-1 hover:bg-white hover:text-black">
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
        </div>
    )
}

export default Arcade