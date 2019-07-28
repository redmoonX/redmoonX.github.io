var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } else {
      console.log('My Todos:');
      for (var i = 0; this.todos.length > i; i++) {
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoInput.value) {
    // todoText: todoText;
    var todoInput = document.getElementById('tdtxt').value;
    var li = document.createElement("li");
    var ul = document.querySelector("ul");
    // this.todos.push({
    //   todoText: todoText,
    //   completed: false
    //   });
      li.appendChild(document.createTextNode(todoInput));
      ul.appendChild(li);
  //   this.todos.push({
  //     todoText: todoText,
  //     completed: false
  //   });
  //   this.displayTodos();
  },
  
  changeTodo: function(position, newValue) {
    this.todos[position].todoText = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    this.todos[position].completed = !this.todos[position].completed;
    this.displayTodos();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
      for (var i = 0; i < totalTodos; i++) {
        if (this.todos[i].completed === true) {
          completedTodos++;
        }
      }
    //
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }  
      } else {
        for (var i = 0; this.todos.length > i; i++) {
          this.todos[i].completed = true;
        }
      }
      this.displayTodos();  
    }
};


// var displayTodosButton = document.getElementById('displayTodosButton');

// displayTodosButton.addEventListener('click', function() {
//   todoList.displayTodos();  
// });

// var toggleAllButton = document.getElementById('toggleAllButton');
  
// toggleAllButton.addEventListener('click', function() {
//   todoList.toggleAll();
// });

// add addTodo by pressing enter key

// var ul = document.querySelector("ul");
// var li = document.createElement("li");