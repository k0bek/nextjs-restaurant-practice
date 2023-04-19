import React from "react";
import FoodItem from "./FoodItem";
import { mealInterface } from "@/pages";
import { useRouter } from "next/router";

const FoodItems = ({ meals }: { meals: mealInterface[] }) => {
	const router = useRouter();
	return (
		<>
			<h1 className=" text-4xl font-bold">
				{router.pathname === "/menu"
					? "Our menu"
					: "The most popular meals in our menu!"}
			</h1>
			<ul className="flex flex-col justify-center items-center py-10 gap-10">
				<div className="flex flex-wrap gap-6 justify-center">
					{meals.map((meal) => {
						return (
							<FoodItem
								key={meal.id}
								title={meal.title}
								description={meal.description}
								price={meal.price}
								image={meal.image}
								mostPopular={meal.mostPopular}
								id={meal.id}
							/>
						);
					})}
				</div>
			</ul>
		</>
	);
};

export default FoodItems;
