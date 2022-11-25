import { MenuItem } from 'components/nav-bar/nav-bar.types';
import { Link } from 'react-router-dom';
import styles from 'components/nav-bar/nav-bar.module.scss';

interface MenuProps {
  items: MenuItem[];
}

export function Menu({ items }: MenuProps) {
  return (
    <ul className={styles.navbarMenu}>
      {items.map(({ label, Icon, url }, i) => (
        <li key={i} className={styles.navbarMenuItem}>
          <Link to={url} className={styles.navbarMenuLink}>
            <div className={styles.navbarMenuIconContainer}>
              <Icon />
            </div>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
