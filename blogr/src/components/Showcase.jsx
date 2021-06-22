import React from "react";
import bg from "../images/bg-pattern-intro.svg";

function Showcase() {
	return (
		<section className='showcase'>
			<div className='overlay px-5 flex flex-col items-center justify-center text-center mb-5 '>
				<h1 className='font-bold text-4xl text-white mb-5 md:text-5xl xl:text-6xl 2xl:text-7xl'>
					A modern publishing platform
				</h1>
				<p className='text-white'>
					Grow your audience and build you online brand
				</p>
				<ul className='flex items-center'>
					<li className='mx-1 my-5'>
						<button className='bg-white py-2 px-4 rounded-full btn-light'>
							Start for Free
						</button>
					</li>

					<li className='mx-1 my-5'>
						<button className='border border-white py-2 px-4 rounded-full'>
							Learn More
						</button>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Showcase;
