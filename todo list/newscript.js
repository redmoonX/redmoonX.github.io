// var todoList = {
//   todos: [],
//   displayTodos: function() {
//     if (this.todos.length === 0) {
//       console.log('Your todo list is empty!');
//     } else {
//       console.log('My Todos:');
//       for (var i = 0; this.todos.length > i; i++) {
//         if (this.todos[i].completed === true) {
//           console.log('(x)', this.todos[i].todoText);
//         } else {
//           console.log('( )', this.todos[i].todoText);
//         }
//       }
//     }
//   },
//   addTodo: function(todoText) {
//     this.todos.push({
//       todoText: todoText,
//       completed: false
//     });
//     this.displayTodos();
//   },
//   changeTodo: function(position, newValue) {
//     this.todos[position].todoText = newValue;
//     this.displayTodos();
//   },
//   deleteTodo: function(position) {
//     this.todos.splice(position, 1);
//     this.displayTodos();
//   },
//   toggleCompleted: function(position) {
//     this.todos[position].completed = !this.todos[position].completed;
//     this.displayTodos();
//   },
//   toggleAll: function() {
//     var totalTodos = this.todos.length;
//     var completedTodos = 0;
//       for (var i = 0; i < totalTodos; i++) {
//         if (this.todos[i].completed === true) {
//           completedTodos++;
//         }
//       }
//     //
//     if (completedTodos === totalTodos) {
//       for (var i = 0; i < totalTodos; i++) {
//         this.todos[i].completed = false;
//       }  
//       } else {
//         for (var i = 0; this.todos.length > i; i++) {
//           this.todos[i].completed = true;
//         }
//       }
//       this.displayTodos();  
//     }
// };

// var displayTodosButton = document.getElementById('displayTodosButton');

// displayTodosButton.addEventListener('click', function() {
//   todoList.displayTodos();  
// });

// var toggleAllButton = document.getElementById('toggleAllButton');
  
// toggleAllButton.addEventListener('click', function() {
//   todoList.toggleAll();
// });

// add functionality to read input.value and display on pager - then incorporate value into existing todosText logic
// ******below is shopping list code:******
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var anchor = document.createElement("a");
	var btn = document.createElement("button");
		anchor.appendChild(document.createTextNode(input.value));
		anchor.onclick = function () {toggleComplete(event)};
		li.appendChild(anchor);
		li.appendChild(btn);
		btn.className = "delete";
		btn.innerHTML = "delete";
		btn.onclick = function () {deleteListElement(event)};
		ul.appendChild(li);
		input.value = "";
}

function deleteListElement(event) {
	ul.removeChild(event.target.parentElement);
}

function toggleComplete(event) {
// event.target.className = "done";
event.target.classList.toggle("done");
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


