import { Navbar } from "@/components/navbar"
import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* ts-expect-error Async Server Component */}
      <Navbar />
      {children}
    </>
  )
}

export default Layout
