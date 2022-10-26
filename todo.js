// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
  {
    userId: 14,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 20,
    id: 2,
    title: "delectus aut autem",
    completed: false,
  },
];



const fetchTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => (arrayOfTodos = json));
};

const logTodos = () => {
  console.log(arrayOfTodos);
};

const populateTodos = () => {
    // get ol element to put todos
    let ol = document.getElementById("todo-list");
    // loop through arrayOfTodos
    for (let i = 0; 1 < arrayOfTodos.length; i++) {
    // create li element
    let li = document.createElement("li");
    // create text node to put title property
    let text = document.createTextNode(arrayOfTodos[i].title)
    // append text to li element
    li.appendChild(text);
    // append li element to ol 
    ol.appendChild(li);
    }
};
