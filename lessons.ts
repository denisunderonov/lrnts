import { Task, TaskFilter } from './types';
import { createTask, addTask, markDone, listTasks, filterTasks } from './controllers';

let tasks: Task[] = []

let newTask: Task = createTask({
    title: 'Learn TypeScript',
    priority: 'medium',
    tags: ['TypeScript', 'JavaScript'],
    dueDate: '2026-05-01',
});
let newTask2: Task = createTask({
    title: 'Learn JavaScript',
    priority: 'medium',
    tags: ['JavaScript'],
    dueDate: '2026-05-01',
});

addTask(tasks, newTask);
addTask(tasks, newTask2);
listTasks(tasks);
markDone(tasks, 1);
listTasks(tasks);

let filter: TaskFilter = {
    status: "done",
    priority: "medium",
};

let filteredTasks = filterTasks(tasks, filter);
listTasks(filteredTasks);