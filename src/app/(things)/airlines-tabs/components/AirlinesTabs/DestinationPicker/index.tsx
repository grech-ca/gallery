import { Field } from "./Field"

export const DestinationPicker = () => {
  return (
    <div className="grid gap-x-4 grid-cols-2">
      <Field city="Munich" code="MUC" label="City of departure" />
      <Field city="Barcelona" code="BCN" label="City of destination" />
    </div>
  )
}
