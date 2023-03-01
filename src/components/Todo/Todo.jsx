import React, { useState } from 'react'
import TodoList from '../TodolIst/TodoList';
import "./todo.scss"

const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [inputVal, setInputVal] = useState("")

    const addTodo = (e) => {
        e.preventDefault()
        setInputVal(e.target.value)

    }


    return (
        <div className='todo'>
            <h1 className='title'>Todo list</h1>
            <form className='todo-form'>
                <input type="text" placeholder='Enter todo...' onChange={addTodo}  value={inputVal} />
                <button type='button' onClick={() => {
                    setTodo([...todo, inputVal]) 
                    setInputVal("")
                     }}>Add</button>

                <TodoList todo={todo} />
            </form>

        </div>
    )
}

export default Todo
