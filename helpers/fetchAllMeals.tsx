const fetchAllMeals = async () => {
	const response = await fetch(
		"https://restaurant-d31a3-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
	);
	const data = await response.json();

	const allMeals = [];

	for (const key in data) {
		allMeals.push({
			id: key,
			...data[key],
		});
	}

	return allMeals;
};

export default fetchAllMeals;
