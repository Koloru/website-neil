const SectionTitle = ({ title }: { title: string }) => {
	return (
		<div className='absolute top-[-10px] flex justify-center w-full'>
			<h2 className='px-8 text-lg font-light tracking-[10px] xs:text-sm xs:tracking-normal uppercase bg-olive text-sunglow text-center border-2 border-sunglow'>
				{title}
			</h2>
		</div>
	);
};

export default SectionTitle;
