import { Button } from 'components/button'
import { Container } from 'components/container'
import { Link } from 'react-router-dom'
import { routes } from 'pages/routes'
import { ReactComponent as Logo } from 'assets/logo.svg'
import styles from './header.module.scss'

export function Header() {
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
      <Button isShadow>Вход и регистрация</Button>
    </Container>
  )
}
