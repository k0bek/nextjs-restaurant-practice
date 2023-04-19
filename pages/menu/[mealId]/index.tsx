import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import fetchAllMeals from "@/helpers/fetchAllMeals";
import fetchMealById from "@/helpers/fetchMealsById";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { mealInterface } from "@/pages";

const SingleMeal = ({ meal }: { meal: mealInterface }) => {
	const router = useRouter();
	const notify = () => toast.success("Your meal has been ordered correctly!");

	return (
		<div className="flex flex-col">
			<Image src={meal?.image} width={600} height={600} alt={meal?.title} />
			<div className=" text-center">
				<h1 className=" text-4xl">{meal?.title}</h1>
				<p>{meal?.description}</p>
				<p>{meal?.price}$</p>
				{meal?.mostPopular && <p>The most popular meal!</p>}
			</div>
			<Button
				onClick={() => {
					router.push("/menu");
				}}
			>
				Go back
			</Button>
			<Button
				onClick={() => {
					setTimeout(() => {
						router.push("/menu");
					}, 2000);
					notify();
				}}
			>
				Order
			</Button>
		</div>
	);
};

export default SingleMeal;

export async function getStaticProps(context: GetStaticPropsContext) {
	const { params } = context;
	const mealId = params!.mealId;

	const meal = await fetchMealById(mealId!);

	if (!meal) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			meal,
		},
		revalidate: 10,
	};
}

export async function getStaticPaths() {
	const allMeals = await fetchAllMeals();

	const paths = allMeals.map((meal) => ({
		params: { mealId: meal.id },
	}));

	return {
		paths,
		fallback: true,
	};
}
