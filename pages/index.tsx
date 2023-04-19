import FoodItems from "@/components/FoodItems/FoodItems";
import fetchAllMeals from "@/helpers/fetchAllMeals";

export interface mealInterface {
	title: string;
	id: string;
	description: string;
	image: string;
	mostPopular: boolean;
	price: string;
}

export default function Home({ meals }: { meals: mealInterface[] }) {
	return <FoodItems meals={meals} />;
}

export async function getStaticProps() {
	const allMeals = fetchAllMeals();

	const mostPopularMeals = (await allMeals).filter(
		(meal) => meal.mostPopular === true
	);

	return {
		props: {
			meals: mostPopularMeals,
		},
	};
}
