import { ReactNode } from "react"

interface DropdownWrapperProps {
    children: ReactNode
}

const DropdownWrapper = ({children}: DropdownWrapperProps) => {
  return (
    <div className="w-full bg-neutral-800 border border-neutral-700 flex flex-col gap-1 rounded-xl p-2 items-start">
        {children}
    </div>
  )
}

export default DropdownWrapper