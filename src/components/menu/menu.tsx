import classNames from 'classnames';
import styles from './menu.module.scss';

type MenuProps = {
  className?: string;
};

const sortBy: string[] = ['Popularity', 'Most Voted', 'Release Date'];
const genre: string[] = ['Action', 'Comedy', 'Horror'];

export const Menu = ({ className }: MenuProps): JSX.Element => {
  const imageUrl =
    'https://img.icons8.com/doodle/48/null/movie-projector--v1.png';

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.logo}>
        <img src={imageUrl} alt='logo' className={styles.logo_image}></img>
        <span className={styles.logo_text}>CineMovie</span>
      </div>
      <span className={styles.title}>Sort By</span>
      <hr className={styles.hr} />
      <ul className={styles.list}>
        {sortBy.map((item, index) => (
          <li className={styles.list_item} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <span className={styles.title}>Genre</span>
      <hr className={styles.hr} />
      <ul className={styles.list}>
        {genre.map((item, index) => (
          <li className={styles.list_item} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
