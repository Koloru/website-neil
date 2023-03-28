// Component Imports
import About from "@/components/About";
import Skills from "@/components/Skills";
export default function Home() {
	return (
		<main className={`flex flex-col gap-4 h-full w-full`}>
			<About />
			<Skills />
		</main>
	);
}
