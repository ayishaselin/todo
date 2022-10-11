const addButton = document.querySelector("#add-button");
const todoItem = document.querySelector("#todo-item");
const todoList = document.querySelector("#todo-list");
const clearAllbutton = document.querySelector("#c-button");
let todoItems =[];
addButton.addEventListener("click", addTodo);
clearAllbutton.addEventListener("click", clearAll);
function addTodo(){
    if(todoItem.value=="")
    {
        alert("please enter the value");
    }
    else
{
todoItems.push(todoItem.value);
  todoItem.value ="";
  renderTodo();
}
}
function removeTodo(index){
    todoItems.splice(index, 1);
    renderTodo();
}
function clearAll(){
    todoItems =[];
    renderTodo();
}
function renderTodo() {
    todoList.innerHTML ="";
    for( let i=0; i< todoItems.length; i++)
    {
    todoList.innerHTML += `<div class="item"><span>${todoItems[i]}</span><button class="blue" onclick="removeTodo(${i})">x</button></div>`;
    }
}