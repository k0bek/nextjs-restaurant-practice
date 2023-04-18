import FoodItems from "@/components/FoodItems/FoodItems";
import fetchAllMeals from "@/helpers/fetchAllMeals";

export interface meals {
	title: string;
	id: string;
	description: string;
	image: string;
	mostPopular: boolean;
	price: string;
}

export default function Home({ meals }: { meals: meals[] }) {
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
