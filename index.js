"use strict";
// To Do Liste
class Task {
    constructor(id, title, text, completed) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.completed = completed;
    }
}
// createn a array for all tasks
let taskList = [];
// imc Function
function addTask(title, text) {
    const newTask = new Task(taskList.length + 1, title, text, false);
    taskList.unshift(newTask);
}
function markTaskAsCompleted(taskId) {
    const task = taskList.find((t) => t.id === taskId);
    if (task) {
        task.completed === true;
    }
}
function deleteTask(taskId) {
    taskList = taskList.filter((t) => t.id !== taskId);
}

function viewTask() {
    console.log('view'); // to do list
    const allTask = taskList.map((task) => console.log(` ${task.title} \n task: ${task.text} ${task.completed ? "Yes" : "No"}`));
}
addTask("Python", "Learnin from 2-7");
addTask("Javascript", "Learning 8-6");
markTaskAsCompleted(1);
deleteTask(2);
viewTask();
