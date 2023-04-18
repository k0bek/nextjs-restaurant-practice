import React from "react";
import NavbarItem from "./NavbarItem";
import NavbarLogo from "./NavbarLogo";

const Navbar = () => {
	return (
		<nav className=" bg-white text-black p-5 text-4xl font-semibold flex items-center justify-between fixed w-full">
			<NavbarLogo />
			<ul className=" flex gap-10 ">
				<NavbarItem href="/">Home</NavbarItem>
				<NavbarItem href="/menu">Menu</NavbarItem>
			</ul>
		</nav>
	);
};

export default Navbar;
