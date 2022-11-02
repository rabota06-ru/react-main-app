import { routes } from 'pages/routes'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from 'assets/logo.svg'
import { Container } from 'components/container'
import { FaFacebookF } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { ReactComponent as VKIcon } from 'assets/vk-icon.svg'
import cn from 'classnames'
import styles from './footer.module.scss'

export function Footer() {
  return (
    <div className={styles.footer}>
      <Container className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <Link to={routes.allVacancies} className={styles.footerLeftLink}>
            Все вакансии
          </Link>
          <Link to={routes.allResumes} className={styles.footerLeftLink}>
            Все резюме
          </Link>
          <Link to='/' className={styles.footerLeftLink}>
            Личный кабинет
          </Link>
        </div>
        <div className={styles.footerCenter}>
          <Logo className={styles.footerCenterLogo} />
          <span className={styles.footerCenterCompanyName}>© 2021 Кадровое агентство «Rabota06»</span>
          <div className={styles.footerCenterSocialContainer}>
            <span className={cn(styles.footerCenterSocial, styles.footerCenterSocialVk)}>
              <VKIcon />
            </span>
            <span className={styles.footerCenterSocial}>
              <FaFacebookF />
            </span>
            <span className={cn(styles.footerCenterSocial, styles.footerCenterSocialInstagram)}>
              <GrInstagram />
            </span>
          </div>
        </div>
        <div className={styles.footerRight}>
          <a href='/' className={styles.footerRightLink}>
            г. Магас, ул. Тангиева, 3
          </a>
          <a href='tel:+7 (928) 000-00-00' className={styles.footerRightLink}>
            +7 (928) 000-00-00
          </a>
          <a href='mailto:rabota06@mail.ru' className={styles.footerRightLink}>
            rabota06@mail.ru
          </a>
        </div>
      </Container>
    </div>
  )
}
