import React from "react";

import { tech } from "@/types/types";

const SkillCard = ({ name, icon, libraries }: tech) => {
	return (
		<div className='relative block w-full h-64 text-olive group sm:h-80'>
			<span className='absolute inset-0 border-4 border-dashed border-sunglow' />
			<div className='relative flex items-end h-full transition-transform transform bg-white border-4 border-sunglow group-hover:-translate-x-2 group-hover:-translate-y-2'>
				{/* Front of card */}
				<div className='p-4 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8'>
					{name}
					{icon}
				</div>

				{/* back of card */}
				<div className='absolute p-4 transition-opacity opacity-0 group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8'>
					<div className='overflow-y-scroll'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
						impedit aspernatur distinctio, corporis dicta fugit quis ea magnam
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillCard;
