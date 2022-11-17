declare type Props<E extends HTMLAttributes<T>, T> = Omit<
  import('react').DetailedHTMLProps<E, T>,
  'ref'
>;

declare module '*.scss';
