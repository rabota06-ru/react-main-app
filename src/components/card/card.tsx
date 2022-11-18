import { PropsWithChildren, HTMLAttributes, useMemo } from 'react';
import cn from 'classnames';
import styles from './card.module.scss';
import { CardShadow } from './card.types';
import { isCardCustomizedShadow } from './card.utils';
import { CSSProperties } from 'react';
import { CARD_DEFAULT_SHADOW } from './card.constants';

interface CardProps
  extends PropsWithChildren,
    Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  shadow?: CardShadow;
}

/**
 * Компонент карточки
 * @param shadow основная тень, которая переопределит дефолтную тень карточки
 */

export function Card({ className, shadow, ...props }: CardProps) {
  const calculatedShadow = useMemo<CSSProperties['boxShadow']>(() => {
    return getShadow(shadow ?? CARD_DEFAULT_SHADOW);
  }, [shadow]);

  function getShadow(shadow: CardShadow): CSSProperties['boxShadow'] {
    if (isCardCustomizedShadow(shadow)) {
      return `${shadow.offsetX ?? CARD_DEFAULT_SHADOW.offsetX}px ${
        shadow.offsetY ?? CARD_DEFAULT_SHADOW.offsetY
      }px ${shadow.blurRadius ?? CARD_DEFAULT_SHADOW.blurRadius}px ${
        shadow.spreadRadius ?? CARD_DEFAULT_SHADOW.spreadRadius
      }px ${shadow.color ?? CARD_DEFAULT_SHADOW.color}`;
    }

    return shadow;
  }

  return (
    <div
      {...props}
      className={cn(styles.card, className)}
      style={{ boxShadow: calculatedShadow }}
    />
  );
}
