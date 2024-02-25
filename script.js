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
		editButton.textContent = "edit";
		editButton.classList.add("editButton");

		// delete button
		deleteButton.textContent = "delete";
		deleteButton.classList.add("deleteButton");

		// buttons container
		buttonsContainer.appendChild(editButton);
		buttonsContainer.appendChild(deleteButton);

		li.appendChild(todoItem);
		li.appendChild(buttonsContainer);

		// Adding an event listener to the button

		editButton.addEventListener("click", function () {
			editTodoItem(newTodo, li);
		});

		deleteButton.addEventListener("click", function () {
			deleteTodoItem(newTodo, li);
		});

		todoListContainer.appendChild(li);
	}
}

// function to edit todo

function editTodoItem(todoItemText, listItem) {
	// Create an input field
	const inputField = document.createElement("input");
	inputField.type = "text";
	inputField.value = todoItemText.textContent;

	// Add event listener to the input field
	inputField.addEventListener("blur", function () {
		const updatedTodo = inputField.value.trim();

		if (updatedTodo !== "") {
			// Update the todo item text
			todoItemText.textContent = updatedTodo;

			// Update the todo in the array
			const index = todoList.indexOf(todoItemText.textContent);
			if (index !== -1) {
				todoList[index] = updatedTodo;
			}
		}

		// Remove the input field
		listItem.removeChild(inputField);
	});

	// Append the input field to the li
	listItem.appendChild(inputField);

	// Focus on the input field
	inputField.focus();
}
// function editTodoItem(todo, listItem) {
// 	const updatedTodo = prompt("Update todo:", todo);

// 	if (updatedTodo !== null) {
// 		const todoItem = listItem.querySelector("p");
// 		todoItem.textContent = updatedTodo;

// 		// Update the todo in the array
// 		const index = todoList.indexOf(todo);
// 		if (index !== -1) {
// 			todoList[index] = updatedTodo;
// 		}
// 	}
// }

// function to delete todo
function deleteTodoItem(todo, listItem) {
	const index = todoList.indexOf(todo);

	if (index !== -1) {
		todoList.splice(index, 1);

		listItem.remove();
	}
}
