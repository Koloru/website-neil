import React from "react";
import Section from "./Section";

import SkillCard from "./SkillCard";

import { MdHtml } from "react-icons/md";
import { tech } from "@/types/types";

const Skills = () => {
	const data: tech[] = [
		{
			name: "HTML",
			icon: <MdHtml size={50} />,
			libraries: [
				{
					name: "Next.js",
					icon: <MdHtml size={50} />,
					link: "https://nextjs.org/",
				},
			],
		},
		{
			name: "HTML",
			icon: <MdHtml size={50} />,
			libraries: [],
		},
		{
			name: "HTML",
			icon: <MdHtml size={50} />,
			libraries: [],
		},
	];
	return (
		<Section title='Things I use' bg='bg-olive'>
			<div className='flex flex-col flex-grow gap-2 md:flex-row'>
				{data.map((tech) => (
					<SkillCard
						key={tech.name}
						name={tech.name}
						icon={tech.icon}
						libraries={tech.libraries}
					/>
				))}
			</div>
		</Section>
	);
};

export default Skills;
