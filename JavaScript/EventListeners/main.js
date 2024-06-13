const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const nameAnswer = document.getElementById("nameAnswer");
	const hobbiesAnswer = document.getElementById("hobbiesAnswer");
	const ageAnswer = document.getElementById("ageAnswer");
	const genderAnswer = document.getElementById("genderAnswer");
	const answers = document.getElementById("answers");

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
	nameAnswer.textContent = `Name - ${name}`;
	hobbiesAnswer.textContent = `Hobbies - ${hobbiesArray.join("\n")}`;
	ageAnswer.textContent = `Age is between - ${age}`;
	genderAnswer.textContent = `Gender - ${gender.value}`;
	answers.classList.add("text-white");
});
