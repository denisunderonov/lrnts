import { Task, CreateTaskInput, TaskFilter  } from "./types";

let currentTaskId: number = 0;

function createTask(input: CreateTaskInput): Task {
    let task: Task = {
        id: currentTaskId++,
        title: input.title,
        priority: input.priority || "medium",
        tags: input.tags || [],
        dueDate: input.dueDate || undefined,
        done: false,
    };
    return task;
}

function addTask(tasks: Task[], task: Task): void {
    tasks.push(task);
    console.log(`Task ${task.title} added`);
}

function markDone(tasks: Task[], taskId: number): boolean {
    let task = tasks.find(el => el.id === taskId);
    if (task) {
        task.done = true;
        console.log(`Task ${task.title} marked as done`);
        return true;
    } else {
        console.log(`Task with id ${taskId} not found`);
        return false;
    }
}

function listTasks(tasks: Task[]): void {
    console.log('Tasks:');
    tasks.forEach(task => {
        console.log(`[${task.title}] / [${task.done ? 'Done' : 'Not done'}] / [${task.priority}] / [${task.tags.length > 0 ? task.tags.join(', ') : '-'}] / [${task.dueDate ? task.dueDate : 'No due date'}]`);
    });
    console.log(`Total tasks: ${tasks.length}`);
}

function filterTasks(tasks: Task[], filter: TaskFilter): Task[] {
    let filteredTasks: Task[] = tasks;
    
    if (filter.status === "done") {
        filteredTasks = filteredTasks.filter(task => task.done === true);
    } else if (filter.status === "todo") {
        filteredTasks = filteredTasks.filter(task => task.done === false);
    }

    if (filter.priority) {
        filteredTasks = filteredTasks.filter(task => task.priority === filter.priority);
    }
    return filteredTasks;
}

export { createTask, addTask, markDone, listTasks, filterTasks };
