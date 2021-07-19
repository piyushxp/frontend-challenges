import {
	arrowDown,
	showcaseDesktop,
	showcaseMobile,
} from "../images/imageConfig";

const Showcase = () => {
	return (
		<section className=' showcase '>
			<div className='overlay'>
				<h1 className='text-4xl uppercase text-white pt-20 text-center tracking-widest font-extrabold md:text-5xl  xl:text-6xl'>
					We are Creatives
				</h1>
				<div>
					<img src={arrowDown} className='mx-auto ' alt='' />
				</div>
			</div>
		</section>
	);
};

export default Showcase;
