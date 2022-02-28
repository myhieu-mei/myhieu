import React from 'react'
import TodoList from './todolist/ToDoList'
import './todolist/todo.scss'
export default function Projetc() {
  return (
    <section id='projects'>
      <h1>I've built</h1>
      <div className='project'>
        <div className='intro'>
          <div>
            <h3>To do list</h3>
            <p className='description'>
              This app will help you create your tasks you need to complete or
              things that you want to do. Besides that, you also update, mark
              done and remove tasks. Enjoy to try this app
            </p>
          </div>
        </div>
        <div className='todo'>
          <TodoList />
        </div>
      </div>
    </section>
  )
}
