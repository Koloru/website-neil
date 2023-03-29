import { BsFillExclamationDiamondFill } from "react-icons/bs";

const Goal = ({ title, desc }: { title: string; desc: string }) => {
	return (
		<div className='flex flex-col items-center justify-center gap-4 p-4 text-center'>
			<BsFillExclamationDiamondFill className='text-4xl text-white' />
			<h1 className='font-light text-md text-sunglow'>{title}</h1>

			<div className='flex justify-center w-full'>
				<p className='text-sm leading-relaxed text-left text-slate-400'>
					{desc}
				</p>
			</div>
		</div>
	);
};

export default Goal;
