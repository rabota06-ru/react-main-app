import { useState } from 'react';
import cn from 'classnames';
import { Button } from '../button';
import { ButtonSize, ButtonVariant } from '../button/button.types';
import { Card } from 'components/card';
import ArrowDownImage from 'assets/images/arrow-down.svg';
import styles from './event-card.module.scss';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  seatsCountTotal: number;
  seatsCountOccupied: number;
  description: string;
}

export function EventCard({
  id,
  title,
  date,
  location,
  seatsCountTotal,
  seatsCountOccupied,
  description,
}: EventCardProps) {
  const [isParticipant, setIsParticipant] = useState(false);
  const [isInfoShown, setIsInfoShown] = useState(false);
  const isButtonDisabled = seatsCountOccupied === seatsCountTotal && !isParticipant;

  return (
    <Card className={styles.event}>
      <div className={styles.eventContent}>
        <div className={styles.eventCircles}>
          <div className={cn(styles.eventCircle, styles.eventCircle_Red)} />
          <div className={cn(styles.eventCircle, styles.eventCircle_Yellow)} />
          <div className={cn(styles.eventCircle, styles.eventCircle_Green)} />
        </div>
        <h3 className={styles.eventTitle}>{title}</h3>
        <div className={styles.eventDate}>{date}</div>
        <div className={styles.eventLocation}>{location}</div>
        <div className={styles.eventSeatsCount}>
          {seatsCountOccupied}/{seatsCountTotal} мест
        </div>
        <div className={cn(styles.eventInfo, { [styles.eventInfo_Hidden]: !isInfoShown })}>
          <div className={styles.eventDescription}>{description}</div>
          {isParticipant ? (
            <Button
              onClick={() => setIsParticipant((is) => !is)}
              className={styles.eventButton}
              variant={ButtonVariant.Attention}
              isDisabled={isButtonDisabled}
              size={ButtonSize.Medium}>
              Отказаться
            </Button>
          ) : (
            <Button
              onClick={() => setIsParticipant((is) => !is)}
              className={styles.eventButton}
              variant={ButtonVariant.Primary}
              isDisabled={isButtonDisabled}
              size={ButtonSize.Medium}>
              Записаться
            </Button>
          )}
        </div>
        <button onClick={() => setIsInfoShown((is) => !is)} className={styles.eventArrowButton}>
          <ArrowDownImage
            className={cn(styles.eventArrow, { [styles.eventArrow_Rotated]: isInfoShown })}
          />
        </button>
      </div>
    </Card>
  );
}
