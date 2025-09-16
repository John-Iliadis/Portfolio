'use client';

import { motion } from 'framer-motion';

export default function SkillsSection() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-4xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Technical Skills
				</motion.h2>

				<div id="Skills" className="relative z-10 text-center rounded-2xl pt-10 pr-10 pl-10">
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

						{/* Languages */}
						<div className="flex flex-wrap items-center gap-4 text-sm mt-2">
							<span className="text-white font-semibold">Languages:</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">C/C++</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">Python</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">Java</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">C#</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">GLSL</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">HLSL</span>
						</div>

						{/* APIs */}
						<div className="flex flex-wrap items-center gap-4 text-sm mt-4">
							<span className="text-white font-semibold">Graphics/APIs:</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">Vulkan</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">OpenGL</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">Direct3D 12</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">Windows API</span>
						</div>

						{/* Developer Tools */}
						<div className="flex flex-wrap items-center gap-4 text-sm mt-4">
							<span className="text-white font-semibold">Developer Tools:</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">Git/Github</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">CMake</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">Clion</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">RenderDoc</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">Jira</span>
						</div>

						{/* Software Engineering */}
						<div className="flex flex-wrap items-center gap-4 text-sm mt-4">
							<span className="text-white font-semibold">Software Engineering:</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">OOP</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">Data Structures and Algorithms</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">Concurrency</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">Debugging</span>
						</div>

						{/* STEM */}
						<div className="flex flex-wrap items-center gap-4 text-sm mt-4">
							<span className="text-white font-semibold">STEM Foundations:</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">Linear Algebra</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">Calculus</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">Vector Calculus</span>
							<span className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">Mechanics</span>
						</div>

					</motion.div>
				</div>
			</div>
		</section>
	);
}
