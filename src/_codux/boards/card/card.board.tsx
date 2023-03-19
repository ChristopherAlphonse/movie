import { createBoard } from '@wixc3/react-board';

import { Card } from '../../../components/card/card';

export default createBoard({
  name: 'Card',
  Board: () => (
    <Card
      movie={{
        id: '777',
        overview:
          "The  the ban of bans i see rthe band poweer comignf to Script are an Irish rock band formed in 2001 in Dublin, consisting of lead vocalist and keyboardist Danny O'Donoghue, lead guitarist Mark Sheehan, and drummer Glen Power",
        release_date: '1999',
        title: 'Avatar',
        vote_average: 7,
        poster_path:
          'https://www.cnet.com/a/img/resize/bc48bbd2f4dbb7f5799eb4bc28bdcf6f19f6f408/hub/2022/05/10/708507de-bb07-4c16-9a94-bbf206a59fd5/avatar.jpg?auto=webp&fit=crop&height=675&width=1200',
      }}
    />
  ),
});
