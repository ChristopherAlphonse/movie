import classNames from 'classnames';

import styles from './favorite.module.scss';

export interface FavoriteProps {
  className?: string;
}

export const Favorite = ({ className }: FavoriteProps) => {
  return <div className={classNames(styles.root, className)}>Favorite</div>;
};
