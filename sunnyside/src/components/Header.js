import { useState } from "react";

const { default: Logo } = require("./Logo");
const { default: Menu } = require("./Menu");
const { default: MenuButton } = require("./MenuButton");

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<header className='absolute w-full flex items-center justify-between p-5 '>
			<div>
				<Logo />
			</div>

			{isOpen && (
				<nav className='navbar shadow-lg'>
					<Menu />
				</nav>
			)}

			<div>
				<MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
		</header>
	);
};

export default Header;
