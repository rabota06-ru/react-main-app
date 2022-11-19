declare type Props<E extends HTMLAttributes<T>, T> = Omit<
  import('react').DetailedHTMLProps<E, T>,
  'ref'
>;

declare module '*.scss';

declare type SVGFC = import('react').VFC<import('react').SVGProps<SVGSVGElement>>;

declare module '*.svg' {
  const SVG: SVGFC;
  export default SVG;
}
