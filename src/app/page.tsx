import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className={`flex justify-center h-full ${raleway.className}`}>
			hello
		</main>
	);
}
