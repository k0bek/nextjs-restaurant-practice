type idType = string | string[];

const fetchMealById = async (id: idType) => {
	const response = await fetch(
		`https://restaurant-d31a3-default-rtdb.europe-west1.firebasedatabase.app/meals/${id}.json`
	);
	const meal = await response.json();

	return meal;
};

export default fetchMealById;
