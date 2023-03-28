import Image from "next/image";
import { Raleway } from "next/font/google";

import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

import Header from "@/components/Header";
import Contact from "@/components/Contact";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={`flex flex-col gap-y-4 h-full p-8 pt-6 py-14 text-charcoal ${raleway.className} max-w-4xl mx-auto overflow-auto debug-screens`}
			>
				<Contact />
				<Header />
				{children}
			</body>
		</html>
	);
}
