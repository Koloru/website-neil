import React from "react";

import { BsChevronDown } from "react-icons/bs";

import { tech } from "@/types/types";

const SkillCard = ({ name, icon, libraries }: tech) => {
	return (
		<div className='relative block w-full h-64 text-olive group sm:h-80'>
			<span className='absolute inset-0 border-4 border-dashed border-sunglow' />
			<div className='relative flex items-end h-full transition-transform transform bg-white border-4 border-sunglow group-hover:-translate-x-2 group-hover:-translate-y-2'>
				{/* Front of card */}
				<div className='flex flex-col items-center justify-center w-full h-full gap-2 p-4 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8'>
					<div className='flex flex-col items-center gap-4 text-xl font-thin tracking-widest text-olive'>
						{name}
						{icon}
						<BsChevronDown className='mt-4' />
					</div>
				</div>

				{/* back of card */}
				<div className='absolute w-full h-full p-4 transition-opacity opacity-0 group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8'>
					<div className='flex flex-col flex-wrap items-center justify-around w-full h-full gap-6 overflow-y-scroll'>
						{libraries.map((lib) => (
							<a
								href={lib.link}
								className='cursor-pointer hover:text-sunglow'
								key={lib.name}
							>
								{lib.icon}
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillCard;
