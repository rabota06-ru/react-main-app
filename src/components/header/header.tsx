import { Button, ButtonSize, ButtonVariant } from 'components/button'
import { Container } from 'components/container'
import { Link } from 'react-router-dom'
import { routes } from 'pages/routes'
import { ReactComponent as Logo } from 'assets/images/logo.svg'
import { useMediaValue } from 'hooks/use-media-value'
import styles from './header.module.scss'

export function Header() {
  const buttonVariant = useMediaValue({ xs: ButtonVariant.Outline, sm: ButtonVariant.Primary })
  const buttonSize = useMediaValue({ xs: ButtonSize.ExtraSmall, sm: ButtonSize.Small, md: ButtonSize.Medium })
  const isButtonShadow = useMediaValue({ xs: false, sm: true })

  function scrollToHowItWorksSection() {
    document.getElementById('how-it-works')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div className={styles.header}>
      <Container className={styles.headerContainer}>
        <Logo className={styles.headerLogo} />
        <div className={styles.headerLinks}>
          <Link to={routes.allVacancies} className={styles.headerLink}>
            Все вакансии
          </Link>
          <Link to={routes.allResumes} className={styles.headerLink}>
            Все резюме
          </Link>
          <span onClick={scrollToHowItWorksSection} className={styles.headerLink}>
            Как это работает?
          </span>
        </div>
        <Button isShadow={isButtonShadow} size={buttonSize} variant={buttonVariant}>
          Вход и регистрация
        </Button>
      </Container>
    </div>
  )
}