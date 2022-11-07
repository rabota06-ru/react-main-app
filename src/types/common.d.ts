declare type Props<E extends HTMLAttributes<T>, T> = Omit<import('react').DetailedHTMLProps<E, T>, 'ref'>

declare module '*.svg' {
  import React from 'react'

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export = { ReactComponent: SVG }
}
