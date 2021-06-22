import desktopImage from "../images/illustration-editor-desktop.svg";
import mobileImage from "../images/illustration-editor-mobile.svg";

const Designed = () => {
	return (
		<section className=' py-20 px-5'>
			<h2 className='text-center text-3xl lg:text-4xl 2xl:text-5xl '>
				Designed for the future
			</h2>

			<div className='text-center flex flex-col-reverse md:grid md:grid-cols-2 md:gap-8 md:items-center md:text-left xl:max-w-7xl xl:m-auto'>
				<div className='mt-10'>
					<h3 className='text-2xl mt-10 mb-5'>
						Intrducing an extensible editor
					</h3>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
						corporis nesciunt cumque ut veniam aperiam doloribus harum dolorum
						explicabo, similique adipisci sit, a modi quos eum nobis natus.
						Eaque, sed! Praesentium molestias accusantium, libero, dolorum
						tenetur fugiat, error cumque velit laboriosam eos pariatur id.
						Tempora saepe nemo, incidunt, nostrum iure rem deleniti aliquam
						voluptatem numquam, officia consectetur at veritatis temporibus.
					</p>

					<h3 className='text-2xl mt-10 mb-5'>Robust Content Management</h3>
					<p>
						Ut, sit delectus! Optio illo voluptatem assumenda ad omnis harum id
						nostrum consequatur cum iste laborum rem ducimus fugiat qui, vitae
						accusamus adipisci. Pariatur, dolorem! Dicta fugiat laboriosam nam
						voluptatibus!
					</p>
				</div>

				<div>
					<picture>
						<source media='(min-width:1024px)' srcSet={desktopImage} />
						<img className='w-full block mx-auto' src={mobileImage} alt='' />
					</picture>
				</div>
			</div>
		</section>
	);
};

export default Designed;
