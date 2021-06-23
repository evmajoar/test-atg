import React, { FC, useEffect } from 'react';
import { observer, useLocalObservable } from 'mobx-react-lite';
import MinutesStore from '../../../store/minutes.store';
import BlocksStore from '../../../store/blocks.store';
import ContentItem from '../content-item';
import './ContentList.sass';

export const ContentList: FC = observer((): JSX.Element => {
  let { minutesData, loadMinutes } = useLocalObservable(() => MinutesStore);
  let { blocksData, loadBlocks } = useLocalObservable(() => BlocksStore);

  useEffect(() => {
    loadBlocks();
    loadMinutes();
  }, [loadMinutes, loadBlocks]);

  return (
    <ul className='content-list'>
      {minutesData?.minutes?.slice(0, 2).map(m => (
        <ContentItem
          key={m.id}
          title={blocksData?.blocks?.[Number(m.id) - 1]}
          minutes={m.time}
        />
      ))}
    </ul>
  );
});
