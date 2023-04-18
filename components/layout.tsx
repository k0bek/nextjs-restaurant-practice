import React from "react";
import Navbar from "./Navbar/Navbar";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className=" bg-slate-100">
			<Navbar />
			<main className="flex flex-col items-center min-h-screen justify-center py-40">
				{children}
			</main>
		</div>
	);
};

export default Layout;
