document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
const addTaskButton = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

let task = JSON.parse(localStorage.getItem('task')) || [];
//will be storted in array 

task.forEach(task => {
    renderTask(task);
});

addTaskButton.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    if(taskText === '') return;

    const newTask  = {
        id: Date.now(),
        text: taskText,
        completed: false
    }
    task.push(newTask);
    saveTask();
    todoInput.value = ""; 
    console.log(task);
});

function renderTask(task){
    console.log(task);
}



// it will save the task in the local storage
function saveTask(){
    localStorage.setItem('task', JSON.stringify(task));
}

})