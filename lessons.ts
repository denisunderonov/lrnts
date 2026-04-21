type Task = {
    id: number;
    title: string;
    done: boolean;
}

let tasks: Task[] = []
let currentTaskId: number = 0;

function createTask(taskTitle: string): Task {
    let task: Task = {
        id: currentTaskId++,
        title: taskTitle,
        done: false,
    };
    return task;
}

function addTask(tasks: Task[], task: Task): void {
    tasks.push(task);
    console.log(`Task ${task.title} added`);
}

function markDone(tasks: Task[], taskId: number): void {
    let task = tasks.find(el => el.id === taskId);
    if (task) {
        task.done = true;
        console.log(`Task ${task.title} marked as done`);
    } else {
        console.log(`Task with id ${taskId} not found`);
    }
}

function listTasks(tasks: Task[]): void {
    console.log('Tasks:');
    tasks.forEach(task => {
        console.log(`[${task.title}] / [${task.done ? 'Done' : 'Not done'}]`);
    });
    console.log(`Total tasks: ${tasks.length}`);
}

let newTask = createTask('Learn TypeScript');
let newTask2 = createTask('Learn JavaScript');
addTask(tasks, newTask);
addTask(tasks, newTask2);
listTasks(tasks);
markDone(tasks, 1);
listTasks(tasks);
