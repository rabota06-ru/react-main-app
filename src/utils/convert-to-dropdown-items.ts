export function convertToDropdownItems(items: { field: number; label: string }[]): { id: number; label: string }[] {
  return items.map(({ field, label }) => ({
    id: field,
    label,
  }))
}
