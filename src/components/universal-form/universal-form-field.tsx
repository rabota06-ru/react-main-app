import { Input } from 'kit/components/input'
import { PhoneInput } from 'kit/components/phone-input'
import { TextArea } from 'kit/components/text-area'
import { Dropdown } from 'kit/components/dropdown'
import { Button, ButtonSize, ButtonVariant } from 'kit/components/button'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { FormField, FormFieldTypes } from './universal-form.types'
import styles from './universal-form.module.scss'

export type TUniversalFormField = {
  label: string
  isRequired: boolean
  description?: string
  actions?: { label: string; onClick: () => void }[]
  fieldName: string
} & FormFieldTypes

export type UniversalFormFieldProps = {
  register: UseFormRegister<FieldValues>
} & TUniversalFormField

export function UniversalFormField({
  label,
  isRequired,
  description,
  actions,
  register,
  fieldName,
  ...fieldTypes
}: UniversalFormFieldProps) {
  return (
    <div className={styles.field}>
      <div className={styles.fieldInfo}>
        <h3 className={styles.fieldLabel}>
          {label}
          {isRequired && <span className={styles.fieldLabelRequired}> *</span>}
        </h3>
        {description !== undefined && <p className={styles.fieldDescription}>{description}</p>}
        {actions?.map((action, i) => (
          <Button key={i} variant={ButtonVariant.Text} size={ButtonSize.ExtraSmall} onClick={action.onClick} className={styles.fieldAction}>
            {action.label}
          </Button>
        ))}
      </div>
      <div className={styles.fieldInputContainer}>
        {fieldTypes.type === FormField.Text && <Input {...register(fieldName)} placeholder='Мой ответ' className={styles.fieldInput} />}
        {fieldTypes.type === FormField.Textarea && (
          <TextArea {...register(fieldName)} placeholder='Мой ответ' className={styles.fieldInput} />
        )}
        {fieldTypes.type === FormField.Date && <Input {...register(fieldName)} placeholder='9:00 - 18:00' className={styles.fieldInput} />}
        {fieldTypes.type === FormField.Dropdown && (
          <Dropdown onSelectItem={() => {}} placeholder='Выбрать' items={fieldTypes.dropdownItems} className={styles.fieldInput} />
        )}
        {fieldTypes.type === FormField.Phone && <PhoneInput {...register(fieldName)} className={styles.fieldInput} />}
      </div>
    </div>
  )
}
