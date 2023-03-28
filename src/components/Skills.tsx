import React from "react";
import Section from "./Section";

import SkillCard from "./SkillCard";

import { MdHtml, MdCss } from "react-icons/md";
import {
	SiJavascript,
	SiPug,
	SiTailwindcss,
	SiSass,
	SiStylus,
	SiReact,
	SiVuedotjs,
	SiNextdotjs,
} from "react-icons/si";
import { tech } from "@/types/types";

const Skills = () => {
	const data: tech[] = [
		{
			name: "HTML",
			icon: <MdHtml size={50} />,
			libraries: [
				{
					name: "Pug",
					icon: <SiPug size={50} />,
					link: "https://pugjs.org/api/getting-started.html",
				},
			],
		},
		{
			name: "CSS",
			icon: <MdCss size={50} />,
			libraries: [
				{
					name: "Tailwind CSS",
					icon: <SiTailwindcss size={50} />,
					link: "https://tailwindcss.com/",
				},
				{
					name: "Sass",
					icon: <SiSass size={50} />,
					link: "https://sass-lang.com/",
				},
				{
					name: "Stylus",
					icon: <SiStylus size={50} />,
					link: "https://stylus-lang.com/",
				},
			],
		},
		{
			name: "Javascript",
			icon: <SiJavascript size={50} />,
			libraries: [
				{
					name: "Next.js",
					icon: <MdHtml size={50} />,
					link: "https://nextjs.org/",
				},
				{
					name: "React",
					icon: <SiReact size={50} />,
					link: "https://reactjs.org/",
				},
				{
					name: "Vue",
					icon: <SiVuedotjs size={50} />,
					link: "https://vuejs.org/",
				},
				{
					name: "next",
					icon: <SiNextdotjs size={50} />,
					link: "https://nextjs.org/",
				},
			],
		},
	];
	return (
		<Section title='Things I use' bg='bg-olive'>
			<div className='flex flex-col flex-grow gap-2 p-4 md:flex-row'>
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
