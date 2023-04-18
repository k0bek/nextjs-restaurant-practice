import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface NavbarItemProps {
	children: React.ReactNode;
	href: string;
}

const NavbarItem = ({ children, href }: NavbarItemProps) => {
	const router = useRouter();
	return (
		<li
			className={
				router.pathname === href
					? "cursor-pointer text-blue-700 transition duration-200"
					: "cursor-pointer hover:text-blue-500 transition duration-200"
			}
		>
			<Link href={href}>{children}</Link>
		</li>
	);
};

export default NavbarItem;
