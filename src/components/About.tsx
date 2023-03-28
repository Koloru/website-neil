import Section from "./Section";

const About = () => {
	return (
		<Section title='About' bg='bg-sunglow'>
			<p className='w-full px-10 py-4 text-lg tracking-wide text-center'>
				Hi, I&apos;m <span className='font-bold'>Neil</span> a{" "}
				<span className='font-bold'>Frontend Developer</span> currently working
				for <span className='font-bold'>Vtime Tech. </span>
				<br />I am passionate about creating beautiful and functional web
				applications. With good user experience and performance in mind.
			</p>
		</Section>
	);
};

export default About;
