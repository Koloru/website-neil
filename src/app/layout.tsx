import Image from "next/image";
import { Raleway } from "next/font/google";

import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

import Header from "@/components/Header";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={`flex flex-col gap-y-4 h-full p-8 py-14 text-charcoal ${raleway.className} max-w-4xl mx-auto overflow-auto debug-screens`}
			>
				<Header />
				{children}
			</body>
		</html>
	);
}
