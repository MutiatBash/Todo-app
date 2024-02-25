// array of the todo list
let todoList = [];
const addTodoButton = document.getElementById("addTodo");
const todoInput = document.getElementById("todoInput");
const todoListContainer = document.getElementById("todoList");

// function to add todo
function addTodo() {
	const newTodo = todoInput.value.trim();

	if (newTodo !== "") {
		todoList.push(newTodo);
		todoInput.value = "";

		// adding the list items to the dom
		const li = document.createElement("li");
		const todoItem = document.createElement("p");
		const editButton = document.createElement("button");
		const deleteButton = document.createElement("button");
		const buttonsContainer = document.createElement("div");

		// adding the contents
		todoItem.textContent = newTodo;
		li.classList.add("tododText");

		// edit button
		editButton.textContent = "Edit";
		editButton.classList.add("editButton");

		// delete button
		deleteButton.textContent = "Delete";
		deleteButton.classList.add("deleteButton");
		buttonsContainer.classList.add("buttonsContainer");

		// buttons container
		buttonsContainer.appendChild(editButton);
		buttonsContainer.appendChild(deleteButton);

		li.appendChild(todoItem);
		li.appendChild(buttonsContainer);

		todoListContainer.appendChild(li);
	}
}


// adding events listeners to the buttons
todoListContainer.addEventListener("click", function (event) {
	const target = event.target;

	if (target.classList.contains("editButton")) {
		const listItem = target.closest("li");
		const todoItem = listItem.querySelector("p");
		editTodoItem(todoItem, listItem);
	} else if (target.classList.contains("deleteButton")) {
		const listItem = target.closest("li");
		const todoItem = listItem.querySelector("p");
		deleteTodoItem(todoItem.textContent, listItem);
	}
});


// function to edit todo item
function editTodoItem(todoItem, listItem) {
	console.log("Current item", todoItem.textContent);

	// an input field for editing
	const inputField = document.createElement("input");
	inputField.type = "text";
	inputField.value = todoItem.textContent;

	// Replacing the todo item text with the input field
	todoItem.replaceWith(inputField);
	inputField.focus();

	// Adding event listener to the input field
	inputField.addEventListener("blur", function () {
		const updatedTodo = inputField.value.trim();

		if (updatedTodo !== "") {
			const newTodoItem = document.createElement("p");
			newTodoItem.textContent = updatedTodo;

			// Replacing the input field with the updated todo item text
			inputField.replaceWith(newTodoItem);

			// Updating the todo in the list
			const index = todoList.indexOf(todoItem.textContent);
			if (index !== -1) {
				todoList[index] = updatedTodo;
			}
		} else {
			const defaultTodoItem = document.createElement("p");
			defaultTodoItem.textContent = todoItem.textContent;
			inputField.replaceWith(defaultTodoItem);
		}
	});
}

// function to delete todo
function deleteTodoItem(todo, listItem) {
	const index = todoList.indexOf(todo);

	if (index !== -1) {
		todoList.splice(index, 1);

		listItem.remove();
	}
}
