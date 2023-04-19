import React from "react";
import Image from "next/image";
import erorrPicture from "../public/error.jpg";

const errorPage = () => {
	return (
		<div className="text-center">
			<Image
				src="https://images.unsplash.com/photo-1555861496-0666c8981751?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				width={600}
				height={600}
				alt="404 error image"
			/>
			<h1 className="text-6xl font-bold mt-4">404 Error</h1>
		</div>
	);
};

export default errorPage;
