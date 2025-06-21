'use client'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical, Trash2 } from 'lucide-react'
import { Todo } from '../types/todo'

interface TodoItemProps {
  todo: Todo
  onDelete: (id: string) => void
}

export default function TodoItem({ todo, onDelete }: TodoItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: todo.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <li
      ref={setNodeRef}
      style={style}
      className={`todo-item ${isDragging ? 'dragging' : ''}`}
    >
      <div className="todo-content">
        <div
          className="drag-handle"
          {...attributes}
          {...listeners}
        >
          <GripVertical size={20} />
        </div>
        <span className="todo-text">{todo.text}</span>
      </div>
      <button
        className="delete-button"
        onClick={() => onDelete(todo.id)}
        title="删除待办事项"
      >
        <Trash2 size={16} />
      </button>
    </li>
  )
} 