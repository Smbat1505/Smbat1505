import {instance} from "./todolist-api";

// type TaskTYpe = {
//     addedDate: string
//     id: string
//     order: number
//     title: string
// }

export type ResponseType<D> = {
    data: D
    fieldsErrors: string[]
    messages: Array<string>
    resultCode: number
}

export enum TaskStatuses {
    New,
    InProgress,
    Completed,
    Draft
}

export enum TaskPriorities {
    Low,
    Middle,
    Hi,
    Urgently,
    Later
}

export type TaskType = {
    description: string
    title: string
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

export type UpdateTaskModelType = {
    title: string
    description: string
    status: number
    priority: number
    startDate: string
    deadline: string
}

type GetTasksResponse = {
    error: string | null
    totalCount: number
    items: TaskType[]
}

export const taskAPI = {
    getTask(todolistID: string,) {
        return instance.get<GetTasksResponse>(`todo-lists/${todolistID}/tasks`)
    },
    createTask(todolistID: string, title: string) {
        return instance.post<ResponseType<TaskType>>(`todo-lists/${todolistID}/tasks`, {title})
    },
    deleteTask(todolistID: string, taskID: string) {
        return instance.delete<ResponseType<{}>>(`todo-lists/${todolistID}/tasks/${taskID}`)
    },
    updateTask(todolistID: string, taskID: string, model: UpdateTaskModelType) {
        debugger
        return instance.put<ResponseType<{}>>(`todo-lists/${todolistID}/tasks/${taskID}`, {model})
    },

}