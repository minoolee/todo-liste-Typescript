// To Do Liste

class Task {
    constructor(
        public id: number,
        public title: string,
        public text: string,
        public completed: boolean
    )
    {}
}

// createn a array for all tasks
let taskList: Task[] = []


// imc Function

function addTask(title: string, text:string){
    const newTask = new Task(taskList.length + 1, title, text, false)
    taskList.unshift(newTask)
}

function markTaskAsCompleted(taskId:number){
    const task = taskList.find((t) => t.id === taskId)
    if (task){
        task.completed === true
    }
}

function deleteTask(taskId: number){
   
        taskList = taskList.filter((t) => t.id !== taskId)

}
//  const task = taskList.find((t) => t.id === taskId)
//if (task){
function viewTask(){
    console.log('view')     // to do list
    
    const allTask = taskList.map((task)=> 
   
    console.log(` ${task.title} \n task: ${task.text} ${task.completed ? "Yes" : "No"}`)
    
    )
}

addTask("Python", "Learnin from 2-7")
addTask("Javascript", "Learning 8-6")

markTaskAsCompleted(1)

deleteTask(2)

viewTask()