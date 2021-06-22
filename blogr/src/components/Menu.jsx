import open from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

const Menu = ({ isOpen, setIsOpen }) => {
	return (
		<div className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
			{isOpen ? <img src={close} alt='' /> : <img src={open} alt='' />}
		</div>
	);
};

export default Menu;
