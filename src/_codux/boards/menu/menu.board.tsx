import { createBoard } from '@wixc3/react-board';
import { Menu } from '../../../components/menu/menu';

export default createBoard({
  name: 'Menu',
  Board: () => <Menu />,
  environmentProps: {
    canvasHeight: 292,
    windowWidth: 1920,
    windowHeight: 1080,
  },
});
