import FoodItems from "@/components/FoodItems/FoodItems";
import fetchAllMeals from "@/helpers/fetchAllMeals";
import { mealInterface } from "..";

const Menu = ({ meals }: { meals: mealInterface[] }) => {
	return <FoodItems meals={meals} />;
};

export default Menu;

export async function getStaticProps() {
	const allMeals = await fetchAllMeals();

	return {
		props: {
			meals: allMeals,
		},
	};
}
