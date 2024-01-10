import React, {useEffect, useState} from "react"
import {taskAPI, UpdateTaskModelType} from "../API/taskForTodolist-api";

export default {
    title: 'TASK-API'
}


export const GetTaskForTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todolistID, setTodolistID] = useState<string>('')

    function getTask() {
        taskAPI.getTask(todolistID).then(res => {
            // debugger
            setState(res.data)
        })
    }

    // 'dc92013c-700a-4fb6-98e9-4a0661e7b124'

    return <div>{JSON.stringify(state)}
        <div>
            <input
                placeholder={'todolistID'}
                value={todolistID}
                onChange={(event) => setTodolistID(event.currentTarget.value)}/>

            <button onClick={getTask}>get task</button>
        </div>
    </div>


}
export const CreateTaskForTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [taskTitle, setTaskTitle] = useState<string>('')
    const [todolistID, setTodolistID] = useState<string>('')

    const createTask = () => {
        taskAPI.createTask(todolistID, taskTitle)
            .then(res => {
                setState(res.data)
            })
    }

    // 'dc92013c-700a-4fb6-98e9-4a0661e7b124', 'YO'

    return <div>{JSON.stringify(state)}
        <div>
            <input
                placeholder={'todolistID'}
                value={todolistID}
                onChange={(event) => setTodolistID(event.currentTarget.value)}/>
            <input
                placeholder={'task Title'}
                value={taskTitle}
                onChange={(event) => setTaskTitle(event.currentTarget.value)}/>
            <button onClick={createTask}>add task</button>
        </div>
    </div>

}
export const DeleteTaskForTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todolistID, setTodolistID] = useState<string>('')
    const [taskID, setTaskID] = useState<string>('')


    const deleteTask = () => {
        taskAPI.deleteTask(todolistID, taskID).then(res => {
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
                placeholder={'taskID'}
                value={taskID}
                onChange={(event) => setTaskID(event.currentTarget.value)}/>

            <button onClick={deleteTask}>delete task</button>
        </div>
    </div>

}
export const UpdateTaskForTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [taskDescription, setTaskDescription] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [status, setStatus] = useState<number>(0)
    const [priority, setPriority] = useState<number>(0)
    const [startDate, setStartDate] = useState<string>('')
    const [deadLine, setDeadLine] = useState<string>('')

    const [todolistID, setTodolistID] = useState<string>('')
    const [taskID, setTaskID] = useState<string>('')




    const updateTask = () => {
        const dat: UpdateTaskModelType = {
            title: title,
            description: taskDescription,
            status: status,
            priority: priority,
            startDate: startDate,
            deadline: deadLine,
        }
        taskAPI.updateTask(todolistID, taskID, dat).then(res => {
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
                placeholder={'taskID'}
                value={taskID}
                onChange={(event) => setTaskID(event.currentTarget.value)}/>
            <input
                placeholder={'Title'}
                value={title}
                onChange={(event) => setTitle(event.currentTarget.value)}/>
            <input
                placeholder={'taskDescription'}
                value={taskDescription}
                onChange={(event) => setTaskDescription(event.currentTarget.value)}/>
            <input
                type='number'
                placeholder={'status'}
                value={status}
                onChange={(event) => setStatus(+event.currentTarget.value)}/>
            <input
                type='number'
                placeholder={'priority'}
                value={priority}
                onChange={(event) => setPriority(+event.currentTarget.value)}/>
            <button onClick={updateTask}>change task</button>
        </div>
    </div>

}