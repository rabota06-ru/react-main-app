import { CSSProperties } from 'react';

export type CardShadow = CardCustomizedShadow | CSSProperties['boxShadow'];

/**
 * test
 * @param blurRadius радиус размытия
 * @param spreadRadius радиус растяжения
 * @param color цвет тени
 */
export type CardCustomizedShadow = {
  offsetX?: number;
  offsetY?: number;
  blurRadius?: number;
  spreadRadius?: number;
  color?: CSSProperties['color'];
};
