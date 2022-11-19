import { DropdownItem } from 'kit/components/dropdown'

export enum FormField {
  Text,
  Textarea,
  Date,
  Dropdown,
  Phone,
}

interface TextField {
  type: FormField.Text
}
interface TextareaField {
  type: FormField.Textarea
}
interface DateField {
  type: FormField.Date
}
interface DropdownField {
  dropdownItems: DropdownItem<any>[]
  type: FormField.Dropdown
}
interface PhoneField {
  type: FormField.Phone
}

export type FormFieldTypes = TextField | TextareaField | DateField | DropdownField | PhoneField
