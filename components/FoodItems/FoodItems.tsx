import React, { useState } from "react";
import FoodItem from "./FoodItem";
import { meals } from "@/pages";

const FoodItems = ({ meals }: { meals: meals[] }) => {
	console.log(meals);
	return (
		<ul className="flex flex-col justify-center items-center py-10 gap-10">
			<h1 className=" text-4xl font-bold">
				The most populars meals in our menu!
			</h1>
			<div className="flex flex-wrap gap-6 justify-center">
				{meals.map((meal) => {
					return (
						<FoodItem
							key={meal.title}
							title={meal.title}
							description={meal.description}
							price={meal.price}
							image={meal.image}
							mostPopular={meal.mostPopular}
						/>
					);
				})}
			</div>
		</ul>
	);
};

export default FoodItems;
