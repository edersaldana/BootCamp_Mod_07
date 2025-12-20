import { Input } from "@/components/ui/input"

interface Props {
  value: string
  onChange: (value: string) => void
}

export const SearchBar = ({ value, onChange }: Props) => {
  return (
    <Input
      placeholder="Buscar película..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
