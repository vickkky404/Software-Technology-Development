const fs = require('fs');
const filePath = "./tasks.json";

const loadTasks = () => {
    try{
      const dataBuffer = fs.readFileSync(filePath);
      const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
}

const saveTasks = (tasks) => {
   const dataJSON =  JSON.stringify(tasks);
}


const addTask = (task) => {
    const tasks = LoadTasks();
    tasks.push({task});
    saveTasks(tasks);
    console.log("Task added successfully");

}

const command = process.argv[2];
const command = process.argv[3];

if(command == 'add'){
    addTask(argument)
}else if(command == 'list'){
    listTasks()
} else if(command == 'remove'){
    removeTask(parseInt(argument));
} else{
    console.log("Command not found");
}