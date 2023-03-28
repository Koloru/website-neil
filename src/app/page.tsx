// Component Imports
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
	return (
		<main className={`flex flex-col gap-4 h-full w-full`}>
			<About />
			<Skills />
			<Experience />
		</main>
	);
}
