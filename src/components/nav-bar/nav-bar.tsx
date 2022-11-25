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
          userImgUrl="https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
        />
        <Menu items={menuItems} />
        <Button className={styles.navbarButton} variant={ButtonVariant.Attention}>
          Выход
        </Button>
      </div>
    </div>
  );
}
