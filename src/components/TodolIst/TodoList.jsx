import React from 'react'

const TodoList = (props) => {
  return (
    <div>
      <ul>

        {props.todo.map((items, key) => {
          return <li key={key}>{items}</li>;
        })}
      </ul>

    </div>
  )
}

export default TodoList
