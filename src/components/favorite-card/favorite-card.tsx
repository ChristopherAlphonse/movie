import classNames from 'classnames';

import styles from './fav-card.module.scss';

export interface FavoriteCardProps {
  className?: string;
  movie: {
    id: number | string;
    title: string;
    poster_path?: string;
    overview: string;
    vote_average?: number;
    release_date: string;
  };
}

export const FavoriteCard = ({ className, movie }: FavoriteCardProps) => {
  const { poster_path, title, vote_average } = movie;
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.card}>
        <img
          src={poster_path}
          alt={title}
          srcSet={`${poster_path} 1x`}
          width={300}
          height={450}
          loading="lazy"
          className={styles.img}
        />
        <div className={styles.detail}>
          <h1 className={styles.h1}>{title}</h1>
          <button className={styles.btn} aria-label="remove from favorites">
            -
          </button>
        </div>
      </div>
    </div>
  );
};
