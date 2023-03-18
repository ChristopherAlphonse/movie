import classNames from 'classnames';

import { Cards } from '../cards/cards';
import { Search } from '../search/search';
import styles from './container.module.scss';

export interface ContainerProps {
  className?: string;
}

export const Container = ({ className }: ContainerProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Search />
      <Cards />
    </div>
  );
};
