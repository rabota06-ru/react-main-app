import styles from '../../nav-bar.module.scss';

interface UserInfoProps {
  firstName: string;
  lastName: string;
  userImgUrl?: string;
}

export function UserInfo({ firstName, lastName, userImgUrl }: UserInfoProps) {
  return (
    <div className={styles.navbarUser}>
      <div
        style={{ background: userImgUrl && `url(${userImgUrl}) center center / cover` }}
        className={styles.navbarUserImg}
      />
      <div className={styles.navbarUserName}>
        {lastName}
        <br />
        {firstName}
      </div>
    </div>
  );
}
