import { useState } from "react";
import { section1 } from "../data/section1";

const Section1 = () => {
	const [cards, setCards] = useState(section1);

	return (
		<section>
			{cards.map(({ id, image, title, desc, button }) => (
				<div key={id}>
					<article>
						<h2>{title}</h2>
						<p>{desc}</p>
						<button>{button}</button>
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
