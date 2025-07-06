import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
	{
		title: 'Vulkan Rendering Engine',
		description: 'A physically based forward+ rendering engine made with C++ using the Vulkan API.',
		image: '/IBL2_gizmo_bloom.png',
		tags: ['C++', 'Vulkan'],
		url: 'https://github.com/John-Iliadis/VulkanRenderingEngine',
	},
	{
		title: 'Projectile Motion Simulator',
		description: 'A physics-based simulator for modeling motion in two dimensions. Written in C++, using OpenGL as the graphics API.',
		image: '/ProjectileMotion.png',
		tags: ['C++', 'OpenGL'],
		url: 'https://github.com/John-Iliadis/ProjectileMotionSimulation',
	},
	{
		title: 'Pixel Adventure',
		description: 'A fast-paced 2D platformer developed with C++, using SFML as the graphics library.',
		image: '/PixelAdventure.png',
		tags: ['C++', 'SFML', 'Tiled'],
		url: 'https://github.com/John-Iliadis/PixelAdventure',
	},
	{
		title: 'Cloud Architectures Capstone',
		description: 'A high-distinction capstone project involving the design and architecture of a serverless AWS cloud solution.',
		image: '/CloudArchitectureDiagram.png',
		tags: ['AWS', 'Cloud Computing', 'Serverless'],
		url: 'https://github.com/John-Iliadis/CloudComputingCapstone',
	},
];

export default function ProjectsSection() {
	return (
		<section className="pb-20 pt-4 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Featured Projects
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<Link href={project.url} key={index} passHref legacyBehavior>
							<a target="_blank" rel="noopener noreferrer">
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
							</a>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
