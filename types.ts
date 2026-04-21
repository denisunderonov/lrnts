export type TaskStatus = "done" | "todo"
export type TaskPriority = "low" | "medium" | "high"
export type TaskFilter = {
    status?: TaskStatus,
    priority?: TaskPriority,
}


export interface Task {
    id: number,
    title: string,
    done: boolean,
    priority: TaskPriority,
    tags: string[],
    dueDate?: string,
}

export interface CreateTaskInput {
    title: string,
    priority?: TaskPriority,
    tags?: string[],
    dueDate?: string,
}
