import { Button } from 'components/button'
import { Container } from 'components/container'
import { Link } from 'react-router-dom'
import { routes } from 'pages/routes'
import styles from './header.module.scss'
import { ReactComponent as Logo } from './logo.svg'

export function Header() {
  return (
    <div>
      <Container className={styles.headerContainer}>
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
    </div>
  )
}