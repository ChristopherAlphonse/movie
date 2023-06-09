import classNames from 'classnames';

import styles from './card.module.scss';

export interface CardProps {
  className?: string;
  movie: {
    id: number | string;
    poster_path?: string;
    title?: string;
    overview?: string;
    vote_average?: number;
    release_date?: string;
  };
}

export const Card = ({ className, movie }: CardProps) => {
  const { poster_path, title, overview, vote_average } = movie;
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
          <h1>{title}</h1>
          <span className={styles.detail_rating}>{vote_average}</span>
          <p className={styles.p}>
            {overview.substring(0, 200)}
            {overview.length > 200 ? '...' : ''}
          </p>
          <button className={styles.btn}>+</button>
        </div>
      </div>
    </div>
  );
};
