import phones from "../images/illustration-phones.svg";
import circles from "../images/bg-pattern-circles.svg";

const State = () => {
	return (
		<section className=' state px-5 py-10 text-white text-center  z-10'>
			<div className='pt'>
				<h2 className='text-center text-3xl lg:text-4xl 2xl:text-5xl mb-5 text-white'>
					State of the Art Infrastrcuture
				</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum,
					error facere provident deserunt assumenda quis ea rem quisquam nostrum
					nisi aspernatur corporis cumque magnam aliquid eaque, reprehenderit
					obcaecati odit. Consectetur, inventore nulla possimus voluptates harum
					voluptas rerum quo, cum blanditiis debitis minima modi veniam. Soluta
					reprehenderit omnis iusto, minima quam rem? Dolore similique vel
					exercitationem excepturi inventore esse aspernatur.
				</p>
			</div>

			<div>
				<div>
					<img className='state-img circles' src={circles} alt='' />
				</div>

				<div>
					<img className='state-img' src={phones} alt='' />
				</div>
			</div>
		</section>
	);
};

export default State;
