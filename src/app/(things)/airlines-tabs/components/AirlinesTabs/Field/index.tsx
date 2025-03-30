import { PropsWithChildren } from "react"

export type FieldProps = PropsWithChildren & {
  label?: string
}

export const Field = ({label, children}: FieldProps) => {
  return (
    <label className="flex flex-col gap-y-2">
      <span className="text-xs text-black">{label}</span>
      <div className="border border-gray-300 rounded-lg p-2 flex justify-between gap-x-4 text-black">
        {children}
      </div>
    </label>
  )
}
