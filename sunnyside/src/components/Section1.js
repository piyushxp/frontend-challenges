import { useState } from "react";
import { section1 } from "../data/section1";

const Section1 = () => {
	const [cards, setCards] = useState(section1);

	return (
		<section className='section-1 mt-0 flex flex-col'>
			{cards.map(({ id, image, title, desc, button }) => (
				<div key={id} className='flex flex-col-reverse'>
					<article className='px-5 text-center '>
						<h2 className='font-bold text-3xl mt-8'>{title}</h2>
						<p>{desc}</p>
						<button className='my-5 uppercase text-sm btn-section-1 border-b border-yellow-500'>
							{button}
						</button>
					</article>

					<div>
						<img src={image} alt='' />
					</div>
				</div>
			))}
		</section>
	);
};

export default Section1;
