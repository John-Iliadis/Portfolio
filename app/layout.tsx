import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'John Iliadis',
	description: 'CS Graduate',
	keywords: [
		'Graphics Programming',
		'Rendering',
		'C++',
		'Python',
		'Vulkan',
		'OpenGL',
		'Software Engineering',
		'Data Structures and Algorithms',
		'Git',
		'CMake',
		'RenderDoc',
		'Jira',
		'Concurrency',
		'John Iliadis',
	],
	authors: [{ name: 'John Iliadis' }],
	creator: 'John Iliadis',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
