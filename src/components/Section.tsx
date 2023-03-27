import SectionTitle from "./SectionTitle";

const Section = ({
	children,
	title,
}: {
	children: React.ReactNode;
	title: string;
}) => {
	return (
		<div className='relative flex w-full p-4 pt-8 bg-sunglow'>
			<SectionTitle title={title} />
			{children}
		</div>
	);
};

export default Section;
