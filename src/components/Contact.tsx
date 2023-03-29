import { AiFillGithub, AiFillMail, AiFillPhone } from "react-icons/ai";

const Contact = () => {
	return (
		<ol className='flex flex-wrap items-center justify-center gap-4 text-xs text-center md:justify-between'>
			<a href='tel:0977-3900-529'>
				<li className='flex items-center gap-2 cursor-pointer hover:text-sunglow'>
					<AiFillPhone />
					0977 3900 529
				</li>
			</a>
			<a href='mailto:neilinfante120@gmail.com'>
				<li className='flex items-center gap-2 cursor-pointer hover:text-sunglow'>
					<AiFillMail />
					neilinfante120@gmail.com
				</li>
			</a>
			<a href='https://github.com/Koloru' target='_blank'>
				<li className='flex items-center gap-2 cursor-pointer hover:text-sunglow'>
					<AiFillGithub />
					Koloru
				</li>
			</a>
			<a href='koloru.dev' target='_blank'>
				<li className='flex items-center gap-2 text-xl cursor-pointer md:text-xs hover:text-sunglow'>
					koloru.dev
				</li>
			</a>
		</ol>
	);
};

export default Contact;
