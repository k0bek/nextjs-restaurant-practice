import React, { useCallback } from "react";
import Image from "next/image";
import Button from "../Button";
import { useRouter } from "next/router";

interface MealItemProps {
	title: string;
	description: string;
	price: string;
	image: string;
	mostPopular: boolean;
	id: string;
}

const FoodItem = ({
	title,
	description,
	price,
	image,
	mostPopular,
	id,
}: MealItemProps) => {
	const router = useRouter();

	const goToTheDetailPage = useCallback(() => {
		router.push(`/menu/${id}`);
	}, [router, id]);

	return (
		<li className="flex justify-center flex-col items-center gap-2 bg-gray-300 p-5 rounded-lg max-w-lg text-center ">
			<p className=" text-3xl font-bold">{title}</p>
			<p className=" text-xl">{description}</p>
			<p className="text-2xl">{price}$</p>
			<Image alt={title} src={image} width={250} height={250} />
			{mostPopular && <p>The most popular meal!</p>}
			<Button onClick={goToTheDetailPage}>See more</Button>
		</li>
	);
};

export default FoodItem;
