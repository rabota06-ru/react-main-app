import { ChangeEvent, InputHTMLAttributes, useEffect, useId, useState } from 'react'
import cn from 'classnames'
import styles from './switch.module.scss'

interface SwitchProps extends Omit<Props<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type' | 'id'> {}

export function Switch({ checked: propsChecked, onChange, ...props }: SwitchProps) {
  const [checked, setChecked] = useState(propsChecked ?? false)
  const switchId = useId()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
    onChange?.(event)
  }

  useEffect(() => {
    if (propsChecked !== undefined) setChecked(propsChecked)
  }, [propsChecked])

  return (
    <label className={cn(styles.switch, { [styles.switchChecked]: checked })} htmlFor={switchId}>
      <input {...props} checked={checked} onChange={handleChange} type='checkbox' id={switchId} className={styles.switchInput} />
      <span className={styles.switchCircle} />
    </label>
  )
}
