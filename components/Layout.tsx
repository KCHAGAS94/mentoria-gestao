import type React from "react"
interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return <div className="min-h-screen">{children}</div>
}

export default Layout
