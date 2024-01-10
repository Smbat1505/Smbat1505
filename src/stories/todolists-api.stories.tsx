import React, {useEffect, useState} from "react"
import {todolistAPI} from "../API/todolist-api";

export default {
    title: 'TODO-API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        todolistAPI.getTodolists().then(res => {
            // debugger
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [title, setTitle] = useState<string>('')

    const creatTodolist = () => {
        todolistAPI.createTodolist(title).then(res => {
            // debugger
            setState(res.data)
        })
    }

    return <div>{JSON.stringify(state)}
        <div>
            <input
                placeholder={'title'}
                value={title}
                onChange={(event) => setTitle(event.currentTarget.value)}/>

            <button onClick={creatTodolist}>add Todolist</button>
        </div>
    </div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todolistID, setTodolistID] = useState<string>('')

    const deleteTodolist = () => {
        todolistAPI.deleteTodolist(todolistID).then(res => {
            // debugger
            setState(res.data)
        })
    }

    return <div>{JSON.stringify(state)}
        <div>
            <input
                placeholder={'todolistID'}
                value={todolistID}
                onChange={(event) => setTodolistID(event.currentTarget.value)}/>

            <button onClick={deleteTodolist}>delete Todolist</button>
        </div>
    </div>
}
export const UpdateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todolistID, setTodolistID] = useState<string>('')
    const [title, setTitle] = useState<string>('')

    const updateTodolist = () => {
        todolistAPI.updateTodolist(todolistID, title).then(res => {
            setState(res.data)
        })
    }

    return <div>{JSON.stringify(state)}
        <div>
            <input
                placeholder={'todolistID'}
                value={todolistID}
                onChange={(event) => setTodolistID(event.currentTarget.value)}/>

            <input
                placeholder={'title'}
                value={title}
                onChange={(event) => setTodolistID(event.currentTarget.value)}/>

            <button onClick={updateTodolist}>update Todolist</button>
        </div>
    </div>
}