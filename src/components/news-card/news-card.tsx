import { useState } from 'react';
import { Card } from 'components/card';
import FavoriteImage from 'assets/images/favorite.svg';
import cn from 'classnames';
import styles from './news-card.module.scss';
import { NewsItem } from './news-card.types';

interface NewsCardProps extends NewsItem {}

export function NewsCard({
  id,
  authorImgUrl,
  firstName,
  lastName,
  createdAt,
  title,
  description,
}: NewsCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  function onFavoriteClick() {
    setIsFavorited((is) => !is);
  }

  return (
    <Card className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardAuthor}>
          <div
            style={{ background: authorImgUrl && `url(${authorImgUrl}) center center / cover` }}
            className={styles.cardAuthorImg}
          />
          <div className={styles.cardAuthorInfo}>
            <p className={styles.cardAuthorName}>{`${lastName} ${firstName}`}</p>
            <p className={styles.cardAuthorDate}>{createdAt}</p>
          </div>
        </div>
        <button className={styles.cardFavoriteBtn} onClick={onFavoriteClick}>
          <FavoriteImage
            className={cn(styles.cardFavoriteIcon, {
              [styles.cardFavoriteIcon_Favorited]: isFavorited,
            })}
          />
        </button>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </Card>
  );
}
