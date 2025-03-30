export type FieldProps = {
  label: string
  city: string
  code: string
}

export const Field = ({label, city, code}: FieldProps) => {
  return (
    <label className="flex flex-col gap-y-2">
      {label && <span className="text-xs text-black">{label}</span>}
      <div className="border border-gray-300 rounded-lg p-2 flex justify-between gap-x-4 text-black">
        <span>{city}</span>
        <span>{code}</span>
      </div>
    </label>
  )
}
