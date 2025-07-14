export default function ProjectileMotionSimulator()
{
    return (
      <div>
          <h1 className="text-3xl font-bold mb-4">Projectile Motion Simulator</h1>

          <hr className={"mb-1 border-gray-400 border-t-1"}/>
          <ul className="list-disc list-outside pl-5 mt-4">
              <li>Developed a physics-based simulator for modeling motion in two dimensions.</li>
              <li>Implemented a 2D batch renderer to optimize draw calls.</li>
              <li>Implemented custom text rendering using FreeType for font rasterization.</li>
              <li>Created interactive vector, graph, and trajectory visualizations for analyzing the projectile’s motion.</li>
          </ul>

          <p className={"mt-1"}>GitHub Link: <a className={"text-blue-700 underline"} href="https://github.com/John-Iliadis/ProjectileMotionSimulation">https://github.com/John-Iliadis/ProjectileMotionSimulation</a></p>

          <h2 className="text-2xl font-bold mb-2 mt-4">Details</h2>
          <hr className={"mb-4 border-gray-400 border-t-1"}/>

          <ul className="list-disc list-outside pl-5">
              <li>Written in C++.</li>
              <li>OpenGL was used for rendering.</li>
              <li>FreeType was used for font rasterization.</li>
              <li>ImGUI was used for the user interface.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-2 mt-4">Preview Video</h2>
          <hr className={"mb-3 border-gray-400 border-t-1"}/>

          <video src="/projectile_motion_simulator/preview.mp4" controls autoPlay={true}></video>
      </div>
    );
}
