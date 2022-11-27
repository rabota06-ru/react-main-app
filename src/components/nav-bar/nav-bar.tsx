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
          userImgUrl="https://i.pinimg.com/236x/c8/05/56/c805568afe4972661c6c8b5206b91511.jpg"
          // userImgUrl="https://i.seadn.io/gae/kTwnvWma_o6PkJyJKCb_7iwYlXwIpCCbC0ANW_xlU1GGFJfzrk60kCnCehDCQmIv4v6L1zeft14EMh9x0MERzQJKkYXfxFSeDyp12Q?auto=format&w=1000"
        />
        <Menu items={menuItems} />
        <Button className={styles.navbarButton} variant={ButtonVariant.Attention}>
          Выход
        </Button>
      </div>
    </div>
  );
}
