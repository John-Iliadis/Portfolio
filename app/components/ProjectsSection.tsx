'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectModal from './ProjectModal';
import VulkanRenderingEngine from './projects/VulkanRenderingEngine';
import ProjectileMotionSimulator from './projects/ProjectileMotionSimulator';
import PixelAdventure from './projects/PixelAdventure';
import CloudArchitectureCapstone from './projects/CloudArchitectureCapstone';
import NextHome from './projects/NextHome';

const projects = [
	{
		title: 'Ypsilantis Rendering Engine',
		description: 'A physically based forward+ rendering engine made with C++ using the Vulkan API.',
		image: '/IBL2_gizmo_bloom.png',
		tags: ['C++', 'Vulkan'],
		component: VulkanRenderingEngine,
	},
	{
		title: 'Projectile Motion Simulator',
		description: 'A physics-based simulator for modeling motion in two dimensions. Written in C++, using OpenGL.',
		image: '/ProjectileMotion.png',
		tags: ['C++', 'OpenGL'],
		component: ProjectileMotionSimulator,
	},
	{
		title: 'Pixel Adventure',
		description: 'A fast-paced 2D platformer developed with C++, using SFML. Made with the pixel adventure assets from itch.io.',
		image: '/PixelAdventure.png',
		tags: ['C++', 'SFML', 'Tiled'],
		component: PixelAdventure,
	},
	{
		title: 'Cloud Architectures Capstone',
		description: 'A high-distinction capstone project involving the design and architecture of a serverless AWS cloud solution.',
		image: '/CloudArchitectureDiagram.png',
		tags: ['AWS', 'Cloud Computing', 'Serverless'],
		component: CloudArchitectureCapstone,
	},
	{
		title: 'Next Home',
		description: 'A high-distinction project involving the development of a real-estate web app for forecasting housing market dynamics.',
		image: '/pic2.png',
		tags: ['React', 'Tailwind', 'D3.js', 'Fast API', 'Pandas', 'Scikit-learn'],
		component: NextHome,
	},
];

export default function ProjectsSection() {
	const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

	return (
		<section className="pb-20 pt-4 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center"
				>
					Featured Projects
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<div
							key={index}
							onClick={() => setSelectedProject(project)}
							className="cursor-pointer"
						>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
								className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800 hover:shadow-lg transition-shadow"
							>
								<div className="aspect-video relative overflow-hidden">
									<Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
									<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-transform duration-300 group-hover:scale-105" />
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold mb-2">{project.title}</h3>
									<p className="text-gray-400 mb-4">{project.description}</p>
									<div className="flex flex-wrap gap-2">
										{project.tags.map((tag, i) => (
											<span key={i} className="text-sm px-3 py-1 bg-gray-800 rounded-full">
												{tag}
											</span>
										))}
									</div>
								</div>
							</motion.div>
						</div>
					))}
				</div>
			</div>

			{selectedProject && (
				<ProjectModal onClose={() => setSelectedProject(null)} >
					<selectedProject.component/>
				</ProjectModal>
			)}
		</section>
	);
}
