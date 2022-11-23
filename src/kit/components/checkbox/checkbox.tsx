import { InputHTMLAttributes, useEffect, useState } from 'react'
import cn from 'classnames'
import { FiCheck } from 'react-icons/fi'
import styles from './checkbox.module.scss'

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
      <span className={styles.checkboxCustom}>
        <FiCheck className={styles.checkboxCustomIcon} />
      </span>
      {text}
    </label>
  )
}
