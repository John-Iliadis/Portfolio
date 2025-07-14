export default function PixelAdventure()
{
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Pixel Adventure</h1>

            <hr className={"mb-1 border-gray-400 border-t-1"}/>
            <ul className="list-disc list-outside pl-5 mt-4">
                <li>A fast paced 2D platformer developed with SFML as the graphics library.</li>
                <li>Implemented core systems, including physics, animations, GUI, and asset handling.</li>
                <li>Parsed and managed world and configuration data with the nlohmann::json library.</li>
                <li>Used the Tiled editor for map design and creation.</li>
            </ul>

            <p className={"mt-1"}>GitHub Link: <a className={"text-blue-700 underline"} href="https://github.com/John-Iliadis/PixelAdventure">https://github.com/John-Iliadis/PixelAdventure</a></p>

            <h2 className="text-2xl font-bold mb-2 mt-4">Details</h2>
            <hr className={"mb-4 border-gray-400 border-t-1"}/>

            <ul className="list-disc list-outside pl-5">
                <li>Written in C++.</li>
                <li>SFML was used for graphics and audio.</li>
                <li>Tiled level editor was used for creating the world.</li>
                <li>nlohmann::json was used for parsing world and configuration data.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-2 mt-4">Gameplay</h2>
            <hr className={"mb-3 border-gray-400 border-t-1"}/>

            <video src="/pixel_adventure/vid.mp4" controls autoPlay={true} muted={true}></video>
        </div>
    );
}
