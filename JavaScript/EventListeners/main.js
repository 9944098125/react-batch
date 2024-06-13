const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const hobbiesArray = [];
	const name = document.getElementById("name").value;
	const hobbies = Array.from(
		document.querySelectorAll("input[name=hobbies]:checked")
	);
	const age = form.elements.age.value;
	const gender = document.querySelector("input[name=gender]:checked");

	const selectedHobbies = hobbies.map((hobby) => hobby.value).join(", ");
	hobbiesArray.push("Selected Hobbies - " + selectedHobbies);

	console.log(name, hobbiesArray.join("\n"), age, gender.value);
});
