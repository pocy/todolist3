'use client'

import { useState } from 'react'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import { Todo } from './types/todo'

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      createdAt: new Date()
    }
    setTodos(prev => [...prev, newTodo])
  }

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const reorderTodos = (newTodos: Todo[]) => {
    setTodos(newTodos)
  }

  return (
    <div className="container">
      <div className="todo-app">
        <h1 className="app-title">📝 待办清单</h1>
        <AddTodo onAdd={addTodo} />
        <TodoList 
          todos={todos} 
          onDelete={deleteTodo} 
          onReorder={reorderTodos}
        />
      </div>
    </div>
  )
} 