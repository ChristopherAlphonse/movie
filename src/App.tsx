import { Container } from './components/container/container';
import { Favorite } from './components/favorite/favorite';
import { Menu } from './components/menu/menu';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Menu />
      <Container />
      <Favorite />
    </div>
  );
}

export default App;
