import { company } from "@/types/types";
import Company from "./Company";
import Section from "./Section";

const Experience = () => {
	const data: company[] = [
		{
			name: "Prismcoders",
			location: "Manila, Philippines",
			title: "Frontend Developer",
			period: "Aug 2019 - Feb 2020",
			tasks: [
				"Design User Interfaces",
				"Style Webpages",
				"Consume data from backend API",
			],
		},
		{
			name: "Vtime Tech",
			location: "Makati, Philippines",
			title: "Frontend Developer",
			period: "Nov 2022 - Present",
			tasks: ["Create User Interfaces from Figma Designs"],
		},
		{
			name: "FEU - Institute of Technology",
			location: "Manila, Philippines",
			title: "BSIT - Digital Arts Student (Batch 2014)",
			period: "2014 - 2020",
			tasks: ["Graduated in the year 2020"],
		},
	];
	return (
		<Section title='Experience' bg='bg-sunglow'>
			<div className='flex flex-col flex-wrap items-center justify-center flex-grow gap-2 px-4 pb-4 md:px-8 md:flex-row'>
				{data.map((company) => (
					<Company key={company.name} {...company} />
				))}
			</div>
		</Section>
	);
};

export default Experience;
