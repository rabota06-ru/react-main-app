import { Button, ButtonVariant } from 'components/button';
import { UserInfo } from './components/user-info/user-info';
import { Menu } from './components/menu/menu';
import { menuItems } from './nav-bar.constants';
import styles from './nav-bar.module.scss';

export function NavBar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <UserInfo
          firstName="Елизавета"
          lastName="Кодзоева"
          userImgUrl="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
        />
        <Menu items={menuItems} />
        <Button className={styles.navbarButton} variant={ButtonVariant.Attention}>
          Выход
        </Button>
      </div>
    </div>
  );
}
