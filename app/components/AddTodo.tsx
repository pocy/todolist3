'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

interface AddTodoProps {
  onAdd: (text: string) => void
}

export default function AddTodo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      onAdd(text.trim())
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="输入新的待办事项..."
        className="todo-input"
      />
      <button type="submit" className="add-button">
        <Plus size={20} />
        添加
      </button>
    </form>
  )
} 