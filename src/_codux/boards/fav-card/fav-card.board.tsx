import { createBoard } from '@wixc3/react-board';

import { FavoriteCard } from '../../../components/favorite-card/favorite-card';

export default createBoard({
  name: 'FavoriteCard',
  Board: () => (
    <FavoriteCard
      movie={{
        id: 888,
        overview:
          'fdsfdsfsffds,f dffsfsfsdfsd, dsfsdf,sdsdfds dfds,fsdfm,sdfds, .sd.dsfd,s ,fsdfsd.fds,fdsfsdfdsf,ds',
        release_date: '1232',
        title: 'The Last Of Us',
        poster_path:
          'https://imgix.bustle.com/uploads/image/2022/6/9/ba6f8ec7-c972-405e-88e6-f3c91524094e-screen-shot-2022-06-09-at-51726-pm.png?w=1200&h=630&fit=crop&crop=focalpoint&fm=jpg&fp-x=0.816&fp-y=0.2843',
        vote_average: 10,
      }}
    />
  ),
});
