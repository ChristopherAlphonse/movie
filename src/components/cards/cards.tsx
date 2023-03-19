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
          overview: 'lloremorem ipsum dolor sit amet, ssasdad',
          vote_average: 7,
          release_date: '1999',
          title: 'Avatar',
          poster_path:
            'https://www.cnet.com/a/img/resize/bc48bbd2f4dbb7f5799eb4bc28bdcf6f19f6f408/hub/2022/05/10/708507de-bb07-4c16-9a94-bbf206a59fd5/avatar.jpg?auto=webp&fit=crop&height=675&width=1200',
        }}
      />
      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
    </div>
  );
};
