import { InputHTMLAttributes, useEffect, useState } from 'react'
import styles from './checkbox.module.scss'
import cn from 'classnames'

interface CheckboxProps extends Omit<Props<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
  text: string
}

export function Checkbox({ text, checked: checkedProp = false, ...props }: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(checkedProp)

  function handleChange() {
    setChecked(checked => !checked)
  }

  useEffect(() => {
    setChecked(checkedProp)
  }, [checkedProp])

  return (
    <label>
      <input {...props} type='checkbox' checked={checked} onChange={handleChange} className={cn(styles.checkbox, props.className)} />
      <span className={styles.checkboxCustom} />
      {text}
    </label>
  )
}
