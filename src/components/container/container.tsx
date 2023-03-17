import classNames from 'classnames';
import styles from './container.module.scss';

export interface ContainerProps {
  className?: string;
}

export const Container = ({ className }: ContainerProps) => {
  return <div className={classNames(styles.root, className)}>Container</div>;
};
