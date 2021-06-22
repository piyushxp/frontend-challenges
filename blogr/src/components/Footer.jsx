import logo from "../images/logo.svg";
import { footer as footerLinks } from "./footerLinks";

const Footer = () => {
	return (
		<footer className='footer'>
			<div>
				<img src={logo} alt='' />
			</div>

			<div>
				{footerLinks.map(({ id, title, link }) => (
					<ul key={id}>
						<h4>{title}</h4>
						{link.map((link) => (
							<li key={link}>{link}</li>
						))}
					</ul>
				))}
			</div>
		</footer>
	);
};

export default Footer;
