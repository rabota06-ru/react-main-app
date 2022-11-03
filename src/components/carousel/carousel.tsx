import { FC, useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import styles from './carousel.module.scss'

interface CarouselProps<T> {
  Item: FC<T>
  items: T[]
  visibleItemsCount: number
  skipItemsCount?: number
  onSlideLeft?: (cardsFromStart: number) => void
  onSlideRight?: (cardBeforeEnd: number) => void
}

/**
 * Карусель
 * @param Item компонент (1 карточка), который будет отрисован
 * @param items массив карточек
 * @param visibleItemsCount количество видимых карточек
 * @param skipItemsCount количество карточек, которые надо пропустить
 * @param onSlideLeft функция, которая получает количество карточек до начала
 * @param onSlideRight функция, которая получает количество карточек до конца
 * @example <Carousel Item={ResumeCard} items={list} visibleItemsCount={4} skipItemsCount={1} />
 */
export function Carousel<T>({ Item, items, visibleItemsCount, skipItemsCount = 1, onSlideLeft, onSlideRight }: CarouselProps<T>) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const potentialCardIndex = useRef(currentCardIndex)
  const isButtonLeftDisabled = currentCardIndex === 0
  const isButtonRightDisabled = currentCardIndex + visibleItemsCount === items.length

  function handleSlideLeft() {
    if (currentCardIndex - skipItemsCount + 1 > 0) {
      setCurrentCardIndex(index => index - skipItemsCount)
      onSlideLeft?.(currentCardIndex - skipItemsCount)
    }
  }

  function handleSlideRight() {
    if (currentCardIndex + visibleItemsCount + skipItemsCount - 1 < items.length) {
      setCurrentCardIndex(index => index + skipItemsCount)
      onSlideRight?.(items.length - currentCardIndex - visibleItemsCount - 1)
    }
  }

  // function handleSlideGesture(event: React.UIEvent<HTMLDivElement, UIEvent>) {
  //   if (!contentRef.current) return

  //   const cardWidth = contentRef.current.clientWidth / visibleItemsCount
  //   const leftOffset = event.currentTarget.scrollLeft - cardWidth * potentialCardIndex.current

  //   if (cardWidth / 2 < Math.abs(leftOffset)) {
  //     if (Math.sign(leftOffset) === -1) {
  //       potentialCardIndex.current -= 1
  //     } else if (Math.sign(leftOffset) === 1) {
  //       potentialCardIndex.current += 1
  //     }
  //   }

  //   if (Math.trunc(leftOffset) === 0 && potentialCardIndex.current !== currentCardIndex) {
  //     if (potentialCardIndex.current > currentCardIndex) onSlideRight?.(items.length - potentialCardIndex.current - visibleItemsCount)
  //     else onSlideLeft?.(potentialCardIndex.current)
  //     setCurrentCardIndex(potentialCardIndex.current)
  //   }
  // }

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scroll({
        left: (contentRef.current.clientWidth / visibleItemsCount) * currentCardIndex,
        behavior: 'smooth',
      })
    }
    potentialCardIndex.current = currentCardIndex
  }, [currentCardIndex, visibleItemsCount])

  return (
    <div className={styles.carousel}>
      <button
        className={cn(styles.carouselButtonLeft, {
          [styles.carouselButtonDisabled]: isButtonLeftDisabled,
        })}
        disabled={isButtonLeftDisabled}
        type='button'
        onClick={handleSlideLeft}
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='14' height='26' viewBox='0 0 16 28' fill='none'>
          <path
            d='M1.25444 13.285L13.2802 1.29398C13.6742 0.901339 14.3121 0.901999 14.7055 1.29601C15.0985 1.68997 15.0975 2.32816 14.7035 2.72111L3.39349 13.9985L14.7039 25.2758C15.0979 25.6688 15.0989 26.3065 14.7059 26.7005C14.5087 26.8981 14.2504 26.9968 13.9921 26.9968C13.7344 26.9968 13.4771 26.8987 13.2803 26.7026L1.25444 14.7118C1.06468 14.5231 0.958186 14.2661 0.958186 13.9985C0.958186 13.7308 1.06498 13.4742 1.25444 13.285Z'
            fill='#3E6FE5'
            stroke='#3E6FE5'
          />
        </svg>
      </button>
      <div ref={contentRef} className={styles.carouselContent}>
        {items.map((item, index) => (
          <div key={index} className={styles.carouselCard} style={{ width: `calc(100%/${visibleItemsCount})` }}>
            <Item {...item} />
          </div>
        ))}
      </div>
      <button
        className={cn(styles.carouselButtonRight, {
          [styles.carouselButtonDisabled]: isButtonRightDisabled,
        })}
        disabled={isButtonRightDisabled}
        type='button'
        onClick={handleSlideRight}
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='14' height='26' viewBox='0 0 16 28' fill='none'>
          <path
            d='M14.7456 13.285L2.71979 1.29398C2.32578 0.901339 1.68787 0.901999 1.29452 1.29601C0.901473 1.68997 0.902489 2.32816 1.29655 2.72111L12.6065 13.9985L1.29614 25.2758C0.902133 25.6688 0.901118 26.3065 1.29411 26.7005C1.4913 26.8981 1.74962 26.9968 2.00794 26.9968C2.2656 26.9968 2.52291 26.8987 2.71974 26.7026L14.7456 14.7118C14.9353 14.5231 15.0418 14.2661 15.0418 13.9985C15.0418 13.7308 14.935 13.4742 14.7456 13.285Z'
            fill='#3E6FE5'
            stroke='#3E6FE5'
          />
        </svg>
      </button>
    </div>
  )
}
