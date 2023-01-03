import { MediaValue, useMediaValueFn } from 'kit/hooks'
import { getFirst } from 'kit/utils'
import { CSSProperties, HTMLAttributes } from 'react'
import { CssColorVariable, getCssVariable } from 'utils/get-css-variable'

interface BoxProps extends Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /** Добавляет css-свойство <<display: flex>> */
  df?: boolean
  /** Добавляет css-свойство <<align-items: center>> */
  aic?: boolean
  /** Добавляет css-свойство <<align-items: start>> */
  ais?: boolean
  /** Добавляет css-свойство <<align-items: end>> */
  aie?: boolean
  /** Добавляет css-свойство <<align-items: space-between>> */
  aisb?: boolean
  /** Добавляет css-свойство <<align-items: space-around>> */
  aisa?: boolean
  /** Добавляет css-свойство <<justify-content: center>> */
  jcc?: boolean
  /** Добавляет css-свойство <<justify-content: start>> */
  jcs?: boolean
  /** Добавляет css-свойство <<justify-content: end>> */
  jce?: boolean
  /** Добавляет css-свойство <<justify-content: space-between>> */
  jcsb?: boolean
  /** Добавляет css-свойство <<justify-content: space-around>> */
  jcsa?: boolean

  /** Добавляет css-свойство <<display: grid>> */
  dg?: boolean
  /** Добавляет css-свойство <<grid-template-columns: *переданное значение*>> */
  gtc?: CSSProperties['gridTemplateColumns']
  /** Добавляет css-свойство <<grid-template-rows: *переданное значение*>> */
  gtr?: CSSProperties['gridTemplateRows']

  /** Добавляет css-свойство <<gap: *переданное значение*>> */
  g?: MediaValue<CSSProperties['gap']>

  /** Добавляет css-свойство <<margin-bottom: *переданное значение*>> */
  mb?: CSSProperties['marginBottom']
  /** Добавляет css-свойство <<margin-top: *переданное значение*>> */
  mt?: CSSProperties['marginTop']
  /** Добавляет css-свойство <<margin-right: *переданное значение*>> */
  mr?: CSSProperties['marginRight']
  /** Добавляет css-свойство <<margin-left: *переданное значение*>> */
  ml?: CSSProperties['marginLeft']
  /** Добавляет css-свойства <<margin-right: *переданное значение*>> и <<margin-left: *переданное значение*>> */
  mh?: CSSProperties['margin']
  /** Добавляет css-свойства <<margin-top: *переданное значение*>> и <<margin-bottom: *переданное значение*>> */
  mv?: CSSProperties['margin']

  /** Добавляет css-свойство <<padding-bottom: *переданное значение*>> */
  pb?: CSSProperties['paddingBottom']
  /** Добавляет css-свойство <<padding-top: *переданное значение*>> */
  pt?: CSSProperties['paddingTop']
  /** Добавляет css-свойство <<padding-right: *переданное значение*>> */
  pr?: CSSProperties['paddingRight']
  /** Добавляет css-свойство <<padding-left: *переданное значение*>> */
  pl?: CSSProperties['paddingLeft']
  /** Добавляет css-свойства <<padding-right: *переданное значение*>> и <<padding-left: *переданное значение*>> */
  ph?: CSSProperties['padding']
  /** Добавляет css-свойства <<padding-top: *переданное значение*>> и <<padding-bottom: *переданное значение*>> */
  pv?: CSSProperties['padding']

  /** Добавляет css-свойство <<background-color: *переданное значение*>> */
  bgc?: CSSProperties['backgroundColor']
  /** Добавляет css-свойство <<background-color: *переданное значение CssColorVariable*>> */
  bgcvar?: CssColorVariable
  /** Добавляет css-свойство <<color: *переданное значение*>> */
  c?: CSSProperties['color']
  /** Добавляет css-свойство <<color: *переданное значение CssColorVariable*>> */
  cvar?: CssColorVariable

  /** Добавляет css-свойство <<position: absolute>> */
  poa?: boolean
  /** Добавляет css-свойство <<position: relative>> */
  por?: boolean
  /** Добавляет css-свойство <<position: sticky>> */
  pos?: boolean
  /** Добавляет css-свойство <<position: fixed>> */
  pof?: boolean
  /** Добавляет css-свойство <<left: *переданное значение*>> */
  l?: CSSProperties['left']
  /** Добавляет css-свойство <<right: *переданное значение*>> */
  r?: CSSProperties['right']
  /** Добавляет css-свойство <<top: *переданное значение*>> */
  t?: CSSProperties['top']
  /** Добавляет css-свойство <<bottom: *переданное значение*>> */
  b?: CSSProperties['bottom']

  /** Добавляет css-свойство <<overflow: hidden>> */
  oh?: boolean
  /** Добавляет css-свойство <<overflow: auto>> */
  oa?: boolean
  /** Добавляет css-свойство <<overflow: scroll>> */
  os?: boolean
  /** Добавляет css-свойство <<overflow-x: hidden>> */
  oxh?: boolean
  /** Добавляет css-свойство <<overflow-x: auto>> */
  oxa?: boolean
  /** Добавляет css-свойство <<overflow-x: scroll>> */
  oxs?: boolean
  /** Добавляет css-свойство <<overflow-y: hidden>> */
  oyh?: boolean
  /** Добавляет css-свойство <<overflow-y: auto>> */
  oya?: boolean
  /** Добавляет css-свойство <<overflow-y: scroll>> */
  oys?: boolean

  /** Добавляет css-свойство <<width: *переданное значение*>> */
  w?: CSSProperties['width']
  /** Добавляет css-свойство <<height: *переданное значение*>> */
  h?: CSSProperties['height']
  /** Добавляет css-свойство <<width: 100%>> */
  w100?: boolean
  /** Добавляет css-свойство <<height: 100%>> */
  h100?: boolean
  /** Добавляет css-свойство <<width: 0px>> */
  w0?: boolean
  /** Добавляет css-свойство <<height: 0px>> */
  h0?: boolean

  /** Добавляет css-свойство <<border-radius: *переданное значение*>> */
  bdrs?: CSSProperties['borderRadius']

  /** Добавляет css-свойство <<border-radius: *переданное значение*>> */
  trs?: CSSProperties['transition']
}

export function Box({
  df,
  aic,
  ais,
  aie,
  aisb,
  aisa,
  jcc,
  jcs,
  jce,
  jcsb,
  jcsa,
  dg,
  gtc,
  gtr,
  g,
  mb,
  mt,
  mr,
  ml,
  mh,
  mv,
  pb,
  pt,
  pr,
  pl,
  ph,
  pv,
  bgc,
  c,
  bgcvar,
  cvar,
  poa,
  por,
  pos,
  pof,
  l,
  r,
  t,
  b,
  oh,
  oa,
  os,
  oxh,
  oxa,
  oxs,
  oyh,
  oya,
  oys,
  w,
  h,
  w100,
  h100,
  w0,
  h0,
  bdrs,
  trs,
  style,
  children,
  ...props
}: BoxProps) {
  const mediaValue = useMediaValueFn()

  return (
    <div
      style={{
        ...style,
        display: getFirst([df, 'flex'], [dg, 'grid']),
        alignItems: getFirst([aic, 'center'], [ais, 'start'], [aie, 'end'], [aisb, 'space-between'], [aisa, 'space-around']),
        justifyContent: getFirst([jcc, 'center'], [jcs, 'start'], [jce, 'end'], [jcsb, 'space-between'], [jcsa, 'space-around']),
        gridTemplateColumns: gtc,
        gridTemplateRows: gtr,
        gap: mediaValue(g),
        marginBottom: mv ?? mb,
        marginTop: mv ?? mt,
        marginRight: mh ?? mr,
        marginLeft: mh ?? ml,
        paddingBottom: pv ?? pb,
        paddingTop: pv ?? pt,
        paddingLeft: ph ?? pl,
        paddingRight: ph ?? pr,
        backgroundColor: bgcvar ? getCssVariable(bgcvar) : bgc,
        color: cvar ? getCssVariable(cvar) : c,
        position: getFirst([poa, 'absolute'], [por, 'relative'], [pos, 'sticky'], [pof, 'fixed']),
        left: l,
        right: r,
        top: t,
        bottom: b,
        overflow: getFirst([oh, 'hidden'], [oa, 'auto'], [os, 'scroll']),
        overflowX: getFirst([oxh, 'hidden'], [oxa, 'auto'], [oxs, 'scroll']),
        overflowY: getFirst([oyh, 'hidden'], [oya, 'auto'], [oys, 'scroll']),
        width: getFirst([w100, '100%'], [w0, '0px'], [w, w]),
        height: getFirst([h100, '100%'], [h0, '0px'], [h, h]),
        borderRadius: bdrs,
        transition: trs,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
