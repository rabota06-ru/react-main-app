import { Button, ButtonSize, ButtonVariant } from 'kit/components/button'
import { Container } from 'kit/components/container'
import { routes } from 'pages/routes'
import { ReactComponent as Logo } from 'assets/images/logo.svg'
import { useMediaValue } from 'kit/hooks'
import { useCallback } from 'react'
import useTypedDispatch from 'hooks/use-typed-dispatch'
import { authSlice } from 'store/slices/auth.slice'
import { Link } from 'wouter'
import styles from './header.module.scss'

export function Header() {
  const buttonVariant = useMediaValue({ xs: ButtonVariant.Outline, sm: ButtonVariant.Primary })
  const buttonSize = useMediaValue({ xs: ButtonSize.ExtraSmall, sm: ButtonSize.Small, md: ButtonSize.Medium })
  const isButtonShadow = useMediaValue({ xs: false, sm: true })
  const dispatch = useTypedDispatch()

  function scrollToHowItWorksSection() {
    document.getElementById('how-it-works')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  const showAuthModal = useCallback(() => dispatch(authSlice.actions.showAuthModal()), [dispatch])

  return (
    <div className={styles.header}>
      <Container className={styles.headerContainer}>
        <Logo className={styles.headerLogo} />
        <div className={styles.headerLinks}>
          <Link href={routes.allVacancies.exact} className={styles.headerLink}>
            Все вакансии
          </Link>
          <Link href={routes.allResumes.exact} className={styles.headerLink}>
            Все резюме
          </Link>
          <span onClick={scrollToHowItWorksSection} className={styles.headerLink}>
            Как это работает?
          </span>
        </div>
        <Button isShadow={isButtonShadow} size={buttonSize} variant={buttonVariant} onClick={showAuthModal}>
          Вход и регистрация
        </Button>
      </Container>
    </div>
  )
}
