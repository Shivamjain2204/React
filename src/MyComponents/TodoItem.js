import React from 'react'

export default function 
TodoItem({todo}) {
  return (
    <div>
        <h5>{todo.no}</h5>
        <p>{todo.work}</p>

    </div>
  )
}
