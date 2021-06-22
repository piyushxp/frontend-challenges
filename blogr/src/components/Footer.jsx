import logo from "../images/logo.svg";
import { footer as footerLinks } from "./footerLinks";

const Footer = () => {
	return (
		<footer className='footer text-center md:text-left md:grid md:grid-cols-2 px-5 lg:py-10'>
			<div>
				<img src={logo} alt='' className='block mx-auto pt-10 pb-5 md:mx-0' />
			</div>

			<div className='md:grid md:grid-cols-2 lg:grid-cols-3'>
				{footerLinks.map(({ id, title, link }) => (
					<ul key={id}>
						<h4 className='mb-5 text-lg'>{title}</h4>
						{link.map((link) => (
							<li className='py-3' key={link}>
								{link}
							</li>
						))}
					</ul>
				))}
			</div>
		</footer>
	);
};

export default Footer;
