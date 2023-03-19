import classNames from 'classnames';

import { FavoriteCard } from '../favorite-card/favorite-card';
import styles from './favorite.module.scss';

export interface FavoriteProps {
  className?: string;
}

export const Favorite = ({ className }: FavoriteProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <FavoriteCard
        movie={{
          id: 1223,
          overview:
            'In the near future around the American Midwest, Cooper, an ex-science engineer and pilot, is tied to his farming land with his daughter Murph and son Tom. As devastating sandstorms ravage Earth',
          vote_average: 7,
          release_date: '1999',
          title: 'Interstellar',
          poster_path:
            'https://i.ibb.co/FDGqCmM/papers-co-ag74-interstellar-wide-space-film-movie-art-33-iphone6-wallpaper.jpg',
        }}
      />
    </div>
  );
};
