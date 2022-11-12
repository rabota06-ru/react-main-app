import { Button } from 'components/button'
import { useForm } from 'react-hook-form'
import { TUniversalFormField, UniversalFormField } from './universal-form-field'
import { FormField } from './universal-form.types'
import styles from './universal-form.module.scss'

interface UniversalFormProps {
  fields: TUniversalFormField[]
  bottomText?: string
  buttonText: string
}

export function UniversalForm({ fields, bottomText, buttonText }: UniversalFormProps) {
  const { register, handleSubmit } = useForm({
    // TODO: убрать
    defaultValues: fields
      .filter(field => field.type === FormField.Dropdown)
      .reduce((defaultValues, field) => {
        defaultValues[field.fieldName] = 3
        return defaultValues
      }, {} as Record<string, any>),
  })
  const onSubmit = (data: any) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {fields.map((field, i) => (
        <UniversalFormField key={i} register={register} {...field} />
      ))}
      {bottomText !== undefined && <p className={styles.bottomText}>{bottomText}</p>}
      <div className={styles.buttonContainer}>
        <Button type='submit'>{buttonText}</Button>
      </div>
    </form>
  )
}
