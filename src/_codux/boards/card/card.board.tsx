import { createBoard } from '@wixc3/react-board';

import { Card } from '../../../components/card/card';

export default createBoard({
  name: 'Card',
  Board: () => (
    <Card
      movie={{
        id: '777',
        overview:
          "A group of elderly people are giving interviews about having lived in a climate of crop blight and constant dust reminiscent of The Great Depression of the 1930's. The first one seen is an elderly woman stating her father was a farmer, but did not start out that way.",
        release_date: '1999',
        title: 'Avatar',
        vote_average: 124,
        poster_path:
          'https://i.ibb.co/FDGqCmM/papers-co-ag74-interstellar-wide-space-film-movie-art-33-iphone6-wallpaper.jpg',
      }}
    />
  ),
});
