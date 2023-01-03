import { MediaValue, useMediaValueFn } from 'kit/hooks'
import { getFirst } from 'kit/utils'
import { CSSProperties, HTMLAttributes } from 'react'
import { CssColorVariable, getCssVariable } from 'utils/get-css-variable'

interface BoxProps extends Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /** Добавляет css-свойство <<display: flex>> */
  df?: MediaValue<boolean>
  /** Добавляет css-свойство <<align-items: center>> */
  aic?: MediaValue<boolean>
  /** Добавляет css-свойство <<align-items: start>> */
  ais?: MediaValue<boolean>
  /** Добавляет css-свойство <<align-items: end>> */
  aie?: MediaValue<boolean>
  /** Добавляет css-свойство <<align-items: space-between>> */
  aisb?: MediaValue<boolean>
  /** Добавляет css-свойство <<align-items: space-around>> */
  aisa?: MediaValue<boolean>
  /** Добавляет css-свойство <<justify-content: center>> */
  jcc?: MediaValue<boolean>
  /** Добавляет css-свойство <<justify-content: start>> */
  jcs?: MediaValue<boolean>
  /** Добавляет css-свойство <<justify-content: end>> */
  jce?: MediaValue<boolean>
  /** Добавляет css-свойство <<justify-content: space-between>> */
  jcsb?: MediaValue<boolean>
  /** Добавляет css-свойство <<justify-content: space-around>> */
  jcsa?: MediaValue<boolean>

  /** Добавляет css-свойство <<display: grid>> */
  dg?: MediaValue<boolean>
  /** Добавляет css-свойство <<grid-template-columns: *переданное значение*>> */
  gtc?: MediaValue<CSSProperties['gridTemplateColumns']>
  /** Добавляет css-свойство <<grid-template-rows: *переданное значение*>> */
  gtr?: MediaValue<CSSProperties['gridTemplateRows']>

  /** Добавляет css-свойство <<gap: *переданное значение*>> */
  g?: MediaValue<CSSProperties['gap']>

  /** Добавляет css-свойство <<margin-bottom: *переданное значение*>> */
  mb?: MediaValue<CSSProperties['marginBottom']>
  /** Добавляет css-свойство <<margin-top: *переданное значение*>> */
  mt?: MediaValue<CSSProperties['marginTop']>
  /** Добавляет css-свойство <<margin-right: *переданное значение*>> */
  mr?: MediaValue<CSSProperties['marginRight']>
  /** Добавляет css-свойство <<margin-left: *переданное значение*>> */
  ml?: MediaValue<CSSProperties['marginLeft']>
  /** Добавляет css-свойства <<margin-right: *переданное значение*>> и <<margin-left: *переданное значение*>> */
  mh?: MediaValue<CSSProperties['margin']>
  /** Добавляет css-свойства <<margin-top: *переданное значение*>> и <<margin-bottom: *переданное значение*>> */
  mv?: MediaValue<CSSProperties['margin']>

  /** Добавляет css-свойство <<padding-bottom: *переданное значение*>> */
  pb?: MediaValue<CSSProperties['paddingBottom']>
  /** Добавляет css-свойство <<padding-top: *переданное значение*>> */
  pt?: MediaValue<CSSProperties['paddingTop']>
  /** Добавляет css-свойство <<padding-right: *переданное значение*>> */
  pr?: MediaValue<CSSProperties['paddingRight']>
  /** Добавляет css-свойство <<padding-left: *переданное значение*>> */
  pl?: MediaValue<CSSProperties['paddingLeft']>
  /** Добавляет css-свойства <<padding-right: *переданное значение*>> и <<padding-left: *переданное значение*>> */
  ph?: MediaValue<CSSProperties['padding']>
  /** Добавляет css-свойства <<padding-top: *переданное значение*>> и <<padding-bottom: *переданное значение*>> */
  pv?: MediaValue<CSSProperties['padding']>

  /** Добавляет css-свойство <<background-color: *переданное значение*>> */
  bgc?: MediaValue<CSSProperties['backgroundColor']>
  /** Добавляет css-свойство <<background-color: *переданное значение CssColorVariable*>> */
  bgcvar?: MediaValue<CssColorVariable>
  /** Добавляет css-свойство <<color: *переданное значение*>> */
  c?: MediaValue<CSSProperties['color']>
  /** Добавляет css-свойство <<color: *переданное значение CssColorVariable*>> */
  cvar?: MediaValue<CssColorVariable>

  /** Добавляет css-свойство <<position: absolute>> */
  poa?: MediaValue<boolean>
  /** Добавляет css-свойство <<position: relative>> */
  por?: MediaValue<boolean>
  /** Добавляет css-свойство <<position: sticky>> */
  pos?: MediaValue<boolean>
  /** Добавляет css-свойство <<position: fixed>> */
  pof?: MediaValue<boolean>
  /** Добавляет css-свойство <<left: *переданное значение*>> */
  l?: MediaValue<CSSProperties['left']>
  /** Добавляет css-свойство <<right: *переданное значение*>> */
  r?: MediaValue<CSSProperties['right']>
  /** Добавляет css-свойство <<top: *переданное значение*>> */
  t?: MediaValue<CSSProperties['top']>
  /** Добавляет css-свойство <<bottom: *переданное значение*>> */
  b?: MediaValue<CSSProperties['bottom']>

  /** Добавляет css-свойство <<overflow: hidden>> */
  oh?: MediaValue<boolean>
  /** Добавляет css-свойство <<overflow: auto>> */
  oa?: MediaValue<boolean>
  /** Добавляет css-свойство <<overflow: scroll>> */
  os?: MediaValue<boolean>
  /** Добавляет css-свойство <<overflow-x: hidden>> */
  oxh?: MediaValue<boolean>
  /** Добавляет css-свойство <<overflow-x: auto>> */
  oxa?: MediaValue<boolean>
  /** Добавляет css-свойство <<overflow-x: scroll>> */
  oxs?: MediaValue<boolean>
  /** Добавляет css-свойство <<overflow-y: hidden>> */
  oyh?: MediaValue<boolean>
  /** Добавляет css-свойство <<overflow-y: auto>> */
  oya?: MediaValue<boolean>
  /** Добавляет css-свойство <<overflow-y: scroll>> */
  oys?: MediaValue<boolean>

  /** Добавляет css-свойство <<width: *переданное значение*>> */
  w?: MediaValue<CSSProperties['width']>
  /** Добавляет css-свойство <<height: *переданное значение*>> */
  h?: MediaValue<CSSProperties['height']>
  /** Добавляет css-свойство <<width: 100%>> */
  w100?: MediaValue<boolean>
  /** Добавляет css-свойство <<height: 100%>> */
  h100?: MediaValue<boolean>
  /** Добавляет css-свойство <<width: 0px>> */
  w0?: MediaValue<boolean>
  /** Добавляет css-свойство <<height: 0px>> */
  h0?: MediaValue<boolean>

  /** Добавляет css-свойство <<border-radius: *переданное значение*>> */
  bdrs?: MediaValue<CSSProperties['borderRadius']>

  /** Добавляет css-свойство <<border-radius: *переданное значение*>> */
  trs?: MediaValue<CSSProperties['transition']>
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
        display: getFirst([mediaValue(df), 'flex'], [mediaValue(dg), 'grid']),
        alignItems: getFirst(
          [mediaValue(aic), 'center'],
          [mediaValue(ais), 'start'],
          [mediaValue(ais), 'end'],
          [mediaValue(aisb), 'space-between'],
          [mediaValue(aisa), 'space-around']
        ),
        justifyContent: getFirst(
          [mediaValue(jcc), 'center'],
          [mediaValue(jcs), 'start'],
          [mediaValue(jce), 'end'],
          [mediaValue(jcsb), 'space-between'],
          [mediaValue(jcsa), 'space-around']
        ),
        gridTemplateColumns: mediaValue(gtc),
        gridTemplateRows: mediaValue(gtr),
        gap: mediaValue(g),
        marginBottom: mediaValue(mv ?? mb),
        marginTop: mediaValue(mv ?? mt),
        marginRight: mediaValue(mh ?? mr),
        marginLeft: mediaValue(mh ?? ml),
        paddingBottom: mediaValue(pv ?? pb),
        paddingTop: mediaValue(pv ?? pt),
        paddingLeft: mediaValue(ph ?? pl),
        paddingRight: mediaValue(ph ?? pr),
        backgroundColor: bgcvar ? getCssVariable(mediaValue(bgcvar)) : mediaValue(bgc),
        color: cvar ? getCssVariable(mediaValue(cvar)) : mediaValue(c),
        position: getFirst(
          [mediaValue(poa), 'absolute'],
          [mediaValue(por), 'relative'],
          [mediaValue(pos), 'sticky'],
          [mediaValue(pof), 'fixed']
        ),
        left: mediaValue(l),
        right: mediaValue(r),
        top: mediaValue(t),
        bottom: mediaValue(b),
        overflow: getFirst([mediaValue(w100), 'hidden'], [mediaValue(oa), 'auto'], [mediaValue(os), 'scroll']),
        overflowX: getFirst([mediaValue(oxh), 'hidden'], [mediaValue(oxa), 'auto'], [mediaValue(oxs), 'scroll']),
        overflowY: getFirst([mediaValue(oyh), 'hidden'], [mediaValue(oya), 'auto'], [mediaValue(oys), 'scroll']),
        width: getFirst([mediaValue(w100), '100%'], [mediaValue(w0), '0px'], [mediaValue(w), mediaValue(w)]),
        height: getFirst([mediaValue(h100), '100%'], [mediaValue(h100), '0px'], [mediaValue(h), mediaValue(h)]),
        borderRadius: mediaValue(bdrs),
        transition: mediaValue(trs),
      }}
      {...props}
    >
      {children}
    </div>
  )
}
