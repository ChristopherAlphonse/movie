import classNames from 'classnames';

import { Card } from '../card/card';
import styles from './cards.module.scss';

export interface CardsProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cardss-and-templates
 */
export const Cards = ({ className }: CardsProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Card
        movie={{
          id: '1223',
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
