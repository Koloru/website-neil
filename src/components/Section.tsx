import SectionTitle from "./SectionTitle";

const Section = ({
	children,
	title,
	bg,
}: {
	children: React.ReactNode;
	title: string;
	bg: string;
}) => {
	return (
		<div className={`relative flex w-full pt-8 ${bg}`}>
			<SectionTitle title={title} />
			{children}
		</div>
	);
};

export default Section;
