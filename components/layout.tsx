import React from "react";
import Navbar from "./Navbar/Navbar";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className=" bg-slate-100">
			<Navbar />
			<div className="">{children}</div>
		</div>
	);
};

export default Layout;
