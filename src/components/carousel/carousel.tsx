import { ButtonHTMLAttributes, FC, HTMLAttributes, useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import styles from './carousel.module.scss'

interface CarouselProps<T extends Record<any, any>> {
  Item: FC<T>
  items: T[]
  visibleItemsCount: number
  skipItemsCount?: number
  onSlideLeft?: (cardsFromStart: number) => void
  onSlideRight?: (cardBeforeEnd: number) => void
  className?: string
  contentProps?: Props<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  slideLeftButtonProps?: Props<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
  slideRightButtonProps?: Props<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
}

/**
 * Карусель
 * @param Item компонент (1 карточка), который будет отрисован
 * @param items массив карточек
 * @param visibleItemsCount количество видимых карточек
 * @param skipItemsCount количество карточек, которые надо пропустить
 * @param onSlideLeft функция, которая получает количество карточек до начала
 * @param onSlideRight функция, которая получает количество карточек до конца
 * @param className класс, который назначается обёртке карусели
 * @param contentProps пропсы, которые назначаются для контейнера карточек
 * @param slideLeftButtonProps пропсы, который назначаются для кнопки слайда влево
 * @param slideRightButtonProps пропсы, который назначаются для кнопки слайда вправо
 * @example <Carousel Item={ResumeCard} items={list} visibleItemsCount={4} skipItemsCount={1} />
 */
export function Carousel<T extends Record<any, any>>({
  Item,
  items,
  visibleItemsCount,
  skipItemsCount = 1,
  onSlideLeft,
  onSlideRight,
  className,
  contentProps,
  slideLeftButtonProps,
  slideRightButtonProps,
}: CarouselProps<T>) {
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
    <div className={cn(styles.carousel, className)}>
      <button
        {...slideLeftButtonProps}
        className={cn(styles.carouselButtonLeft, slideLeftButtonProps?.className, {
          [styles.carouselButtonDisabled]: isButtonLeftDisabled,
        })}
        disabled={isButtonLeftDisabled}
        type='button'
        onClick={handleSlideLeft}
      >
        <MdOutlineArrowBackIos size={30} className={styles.carouselButtonLeftIcon} />
      </button>
      <div {...contentProps} ref={contentRef} className={cn(styles.carouselContent, contentProps?.className)}>
        {items.map((item, index) => (
          <div key={index} className={styles.carouselCard} style={{ width: `calc(100%/${visibleItemsCount})` }}>
            <Item {...item} />
          </div>
        ))}
      </div>
      <button
        {...slideRightButtonProps}
        className={cn(styles.carouselButtonRight, slideRightButtonProps?.className, {
          [styles.carouselButtonDisabled]: isButtonRightDisabled,
        })}
        disabled={isButtonRightDisabled}
        type='button'
        onClick={handleSlideRight}
      >
        <MdOutlineArrowForwardIos size={30} className={styles.carouselButtonRightIcon} />
      </button>
    </div>
  )
}
