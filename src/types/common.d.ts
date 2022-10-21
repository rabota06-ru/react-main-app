declare type Props<E extends HTMLAttributes<T>, T> = Omit<DetailedHTMLProps<E, T>, 'ref'>
