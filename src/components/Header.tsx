import Image from "next/image";

import whale from "@/assets/whale.svg";

const Header = () => {
	return (
		<div className='flex flex-col items-center justify-center w-full p-4 bg-olive text-sunglow'>
			<Image src={whale} alt='logo' height={90} className='my-4' />
			<h1 className='flex items-center text-5xl font-black tracking-wider'>
				NEIL
			</h1>
			<span className='text-2xl'>INFANTE</span>

			<span className='tracking-wide'>Frontend Developer</span>
		</div>
	);
};

export default Header;
