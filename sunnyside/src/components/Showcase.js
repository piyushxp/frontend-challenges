import {
	arrowDown,
	showcaseDesktop,
	showcaseMobile,
} from "../images/imageConfig";

const Showcase = () => {
	return (
		<section className='showcase'>
			<div className='overlay'>
				<h1 className='text-4xl uppercase text-white pt-20 text-center tracking-widest font-extrabold md:text-5xl  xl:text-6xl'>
					We are Creatives
				</h1>
			</div>

			<div className='absolute top-0 left-0'>
				<picture>
					<source media='(min-width:768px)' srcSet={showcaseDesktop} />
					<img src={showcaseMobile} alt='' />
				</picture>
			</div>

			<div>
				<img
					src={arrowDown}
					className='mx-auto mt-24 sm:mt-64 md:mt-32 xl:mt-56'
					alt=''
				/>
			</div>
		</section>
	);
};

export default Showcase;
