window.addEventListener("load", () => {
	allTodo = JSON.parse(localStorage.getItem("allTodo")) || [];
	const form = document.getElementById("createForm");
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const todoContentValue = event.target.elements.todoContent.value;
		// console.log(todoContentValue);
		// console.log(event);
		const newTodo = {
			todoContent: todoContentValue,
			done: false,
			createAt: new Date(),
		};
		allTodo.push(newTodo);
		localStorage.setItem("allTodo", JSON.stringify(allTodo));
		DisplayTodo();
		event.target.reset();
	});
	DisplayTodo();
});

function DisplayTodo() {
	const listContainer = document.getElementById("list");
	listContainer.innerHTML = "";

	allTodo.forEach((eachTodo) => {
		const listItem = document.createElement("li");
		listItem.classList.add("item");
		const label = document.createElement("label");
		const checkbox = document.createElement("input");
		const checkboxReplacement = document.createElement("span");
		checkboxReplacement.classList.add("checkbox-replacement");
		const todoContentContainer = document.createElement("div");
		todoContentContainer.classList.add("content");
		const actions = document.createElement("div");
		actions.classList.add("actions");
		const editBtn = document.createElement("button");
		editBtn.classList.add("edit-btn");
		const deleteBtn = document.createElement("button");
		deleteBtn.classList.add("delete-btn");
		editBtn.classList.add("btn");
		deleteBtn.classList.add("btn");
		const todoContentInput = document.createElement("input");

		checkbox.type = "checkbox";
		checkbox.checked = eachTodo.done;
		todoContentInput.value = eachTodo.todoContent;
		todoContentInput.readOnly = true;
		todoContentInput.type = "text";
		editBtn.textContent = "Edit";
		deleteBtn.textContent = "Delete";

		label.appendChild(checkbox);
		label.appendChild(checkboxReplacement);
		todoContentContainer.appendChild(todoContentInput);
		actions.appendChild(editBtn);
		actions.appendChild(deleteBtn);
		listItem.appendChild(label);
		listItem.appendChild(todoContentContainer);
		listItem.appendChild(actions);
		listContainer.appendChild(listItem);

		if (eachTodo.done) {
			listItem.classList.add("done");
		}

		checkbox.addEventListener("change", (event) => {
			// console.log(event);
			eachTodo.done = event.target.checked;
			localStorage.setItem("allTodo", JSON.stringify(allTodo));
			if (eachTodo.done) {
				listItem.classList.add("done");
			} else {
				listItem.classList.remove("done");
			}
			DisplayTodo();
		});

		editBtn.addEventListener("click", () => {
			const contentInput = todoContentContainer.querySelector("input");
			contentInput.removeAttribute("readonly");
			contentInput.focus();
			contentInput.addEventListener("blur", (event) => {
				contentInput.setAttribute("readonly", true);
				// console.log(event);
				eachTodo.todoContent = event.target.value;
				localStorage.setItem("allTodo", JSON.stringify(allTodo));
				DisplayTodo();
			});
		});

		deleteBtn.addEventListener("click", (event) => {
			allTodo = allTodo.filter((todo) => todo !== eachTodo);
			localStorage.setItem("allTodo", JSON.stringify(allTodo));
			DisplayTodo();
		});
	});
}
