import { Raleway } from "next/font/google";

import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Head from "next/head";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<Head>
				<title>Neil Infante</title>
			</Head>
			<body
				className={`flex flex-col overscroll-none gap-y-4 h-full p-8 pt-6 py-14 text-charcoal ${raleway.className} max-w-4xl mx-auto overflow-auto`}
			>
				<Contact />
				<Header />
				{children}
			</body>
		</html>
	);
}
