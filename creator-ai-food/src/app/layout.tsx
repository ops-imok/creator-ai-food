import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Creator AI Food - 创意菜谱生成器',
  description: 'AI 驱动的新菜创造平台',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
