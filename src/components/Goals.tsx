import Goal from "./Goal";
import Section from "./Section";

const Goals = () => {
	const data = [
		{
			title: "Create and Understand style systems",
			desc: "I want to be able to replicate and understand the style system of different websites, apps and other codebases in a very deep and understandable way.",
		},
		{
			title: "I want to understand how things work",
			desc: "I want to be able to understand how a codebase works, how it's structured and how it's built from the ground up. ",
		},
		{
			title: "I want to be able to work on different codebases",
			desc: "I want to be able to be a part of a multitude of projects and learn from them as a developer and build my own style",
		},
		{
			title: "I want to be a part of the team and grow alongside my teammates",
			desc: "I want to be able to work with a team of developers and learn from them and hopefully they learn from me and grow together as a team.",
		},
	];
	return (
		<Section title='Goals' bg='bg-olive'>
			<div className='grid w-full grid-cols-1 gap-4 p-8 md:grid-cols-3 auto-cols-auto place-items-baseline place-content-center'>
				{data.map((goal, i) => (
					<Goal title={goal.title} desc={goal.desc} key={i} />
				))}
			</div>
		</Section>
	);
};

export default Goals;
