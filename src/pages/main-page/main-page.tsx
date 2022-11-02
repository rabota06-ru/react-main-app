import { FirstSection } from './components/first-section/first-section'
import styles from './main-page.module.scss'

export function MainPage() {
  return (
    <div className={styles.main}>
      <FirstSection />
    </div>
  )
}
