import { CSSProperties, HTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './box.module.scss'

interface BoxProps extends Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  flex?: boolean
  /** TODO: нужно будет документировать поля именно вот так - каждое поле отдельно */
  aiCenter?: boolean
  /** test */
  jcCenter?: boolean
  gap?: CSSProperties['gap']
  mb?: CSSProperties['marginBottom']
  mt?: CSSProperties['marginTop']
  mr?: CSSProperties['marginRight']
  ml?: CSSProperties['marginLeft']
  mh?: CSSProperties['margin']
  mv?: CSSProperties['margin']
}

export function Box({ flex, aiCenter, jcCenter, gap, mb, mt, mr, ml, mh, mv, style, className, children, ...props }: BoxProps) {
  return (
    <div
      className={cn(className, {
        [styles.box_DisplayFlex]: flex,
        [styles.box_AlignItemsCenter]: aiCenter,
        [styles.box_JustifyContentCenter]: jcCenter,
      })}
      style={{
        ...style,
        gap,
        marginBottom: mv ?? mb,
        marginTop: mv ?? mt,
        marginRight: mh ?? mr,
        marginLeft: mh ?? ml,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
