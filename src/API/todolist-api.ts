import axios from 'axios'

const settings = {
    withCredentials: true,
    // headers: {
    //     'API_KEY': 'ccfb810e-d396-43d3-bd23-d75be8db7355'
    // }
}
export const instance = axios.create(
    {
        baseURL: `https://social-network.samuraijs.com/api/1.1/`,
        ...settings
    }
)

export type TodolistType = {
    addedDate: string
    id: string
    order: number
    title: string
}

export type ResponseType<D> = {
    data: D
    fieldsErrors: string[]
    messages: Array<string>
    resultCode: number
}

export type CreateTodolistType = { item: TodolistType }

export const todolistAPI = {
    getTodolists() {
        const promise = instance.get<Array<TodolistType>>(`todo-lists`)
        return promise
    },
    createTodolist(title: string) {
        const promise = instance.post<ResponseType<CreateTodolistType>>(`todo-lists`, {title})
        return promise
    },
    deleteTodolist(todolistID: string) {
        const promise = instance.delete<ResponseType<{}>>(`todo-lists/${todolistID}`)
        return promise
    },
    updateTodolist(todolistID: string, title: string) {
        const promise = instance.put<ResponseType<{}>>(`todo-lists/${todolistID}`, {title})
        return promise
    },

}