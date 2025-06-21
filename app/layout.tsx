import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ToDoList - 待办事项清单',
  description: '一个功能完整的待办事项管理应用',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
} 