import Link from "next/link";

export default function VulkanRenderingEngine()
{
    return (
      <div>
          <h1 className="text-3xl font-bold mb-4">Vulkan Rendering Engine</h1>

          <hr className={"mb-1 border-gray-400 border-t-1"}/>
          <p className={"mt-4 mb-1"}>A physically based forward+ rendering engine made with C++ using the Vulkan API.</p>
          <p>GitHub Link: <a className={"text-blue-700 underline"} href="https://github.com/John-Iliadis/VulkanRenderingEngine">https://github.com/John-Iliadis/VulkanRenderingEngine</a></p>

          <h2 className="text-2xl font-bold mb-2 mt-4">Features</h2>
          <hr className={"mb-1 border-gray-400 border-t-1"}/>

          <p className={"mt-4"}>Implementation of a variety of rendering techniques:</p>
          <ul className="list-disc list-inside pl-5">
              <li>Physically based rendering using the metallic workflow</li>
              <li>Image based lighting</li>
              <li>Bloom</li>
              <li>Screen space ambient occlusion (SSAO)</li>
              <li>Cascaded shadow mapping</li>
              <li>Omnidirectional shadow mapping</li>
              <li>Skybox</li>
              <li>MSAA</li>
              <li>HDR</li>
          </ul>

          <p className={"mt-2"}>Optimizations techniques:</p>
          <ul className="list-disc list-inside pl-5">
              <li>Instanced rendering</li>
              <li>Compute based light culling</li>
              <li>Asynchronous GLTF model loading</li>
              <li>Face culling</li>
              <li>Depth prepass + early depth test</li>
          </ul>

          <p className={"mt-2"}>Implementation of an editor:</p>
          <ul className="list-disc list-inside pl-5">
              <li>Functional scene graph that contains node creation, drag and drop, copy-pasting, renaming, and deleting</li>
              <li>Infinite grid</li>
              <li>Transform gizmos</li>
              <li>Coordinate system gizmo</li>
              <li>World space light icons</li>
              <li>Camera with view and first person modes</li>
          </ul>

          <h2 className="text-2xl font-bold mb-2 mt-4">Preview Images</h2>
          <hr className={"mb-1 border-gray-400 border-t-1"}/>

          <h3 className="text-xl font-bold mb-2 mt-3">Physically Based Rendering + Image Based Lighting</h3>
          <img src="/vulkan_rendering_engine/IBL2_gizmo_bloom.png" alt="PBR + IBL"/>

          <h3 className="text-xl font-bold mb-2 mt-3">Bloom</h3>
          <img src="/vulkan_rendering_engine/bloom1.png" alt="bloom 1" className={"mb-4"}/>
          <img src="/vulkan_rendering_engine/bloom2.png" alt="bloom 2"/>

          <h3 className="text-xl font-bold mb-2 mt-3">Screen Space Ambient Occlusion (SSAO)</h3>
          <img src="/vulkan_rendering_engine/ssao.png" alt="ssao"/>

          <h3 className="text-xl font-bold mb-2 mt-3">Shadow Mapping</h3>
          <img src="/vulkan_rendering_engine/shadow_mapping.png" alt="shadow mapping"/>
      </div>
    );
}
