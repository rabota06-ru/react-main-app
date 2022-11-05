import { Button, ButtonSize, ButtonVariant } from 'components/button'
import { Container } from 'components/container'
import { Link } from 'react-router-dom'
import { routes } from 'pages/routes'
import { ReactComponent as Logo } from 'assets/images/logo.svg'
import { useMediaValue } from 'hooks/use-media-value'
import styles from './header.module.scss'

export function Header() {
  const buttonVariant = useMediaValue({ xs: ButtonVariant.Text, sm: ButtonVariant.Primary })
  const buttonSize = useMediaValue({ xs: ButtonSize.ExtraSmall, sm: ButtonSize.Small, md: ButtonSize.Medium })
  const isButtonShadow = useMediaValue({ xs: false, sm: true })

  return (
    <Container className={styles.header}>
      <Logo className={styles.headerLogo} />
      <div className={styles.headerLinks}>
        <Link to={routes.allVacancies} className={styles.headerLink}>
          Все вакансии
        </Link>
        <Link to={routes.allResumes} className={styles.headerLink}>
          Все резюме
        </Link>
        <Link to='#how-it-works' className={styles.headerLink}>
          Как это работает?
        </Link>
      </div>
      <Button isShadow={isButtonShadow} size={buttonSize} variant={buttonVariant}>
        Вход и регистрация
      </Button>
    </Container>
  )
}
