import { company } from "@/types/types";

const Company = ({ name, location, period, tasks, title }: company) => {
	return (
		<div className='flex-col p-8 rounded text-sunglow bg-olive'>
			<h1 className='text-2xl font-bold tracking-widest uppercase'>{name}</h1>
			<span className='text-xs capitalize text-slate-200'>{location}</span>
			<div className='text-lg font-semibold text-sunglow'>{title}</div>
			<div className=' text-slate-400'>{period}</div>

			<ul className='flex flex-col gap-2 p-2 pl-6 pr-0 text-sm font-thin tracking-wide list-disc'>
				{tasks.map((task) => (
					<li key={task}>{task}</li>
				))}
			</ul>
		</div>
	);
};

export default Company;
