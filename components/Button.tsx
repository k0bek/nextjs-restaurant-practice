import React from "react";

interface ButtonProps {
	onClick: () => void;
}

const Button = ({ onClick }: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			className=" bg-blue-500 p-5 text-white rounded-full mt-3 cursor-pointer hover:bg-blue-900 transition"
		>
			Show details
		</button>
	);
};

export default Button;
