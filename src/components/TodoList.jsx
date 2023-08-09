import React from 'react'

const TodoList = ({todoList}) => {
  return (
    <div>
      {
        todoList.map((todoItem) => {
            return (
                <div className='text-white' key={todoItem.id}>
                    <p  >{todoItem.username}</p>
                    <p  >{todoItem.password}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default TodoList
