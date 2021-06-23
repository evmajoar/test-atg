import React, { FC } from 'react';
import Button from '../../button';
import { IconPlay } from '../../icon/IconPlay';
import './ContentItem.sass';

interface IContentItem {
  title: string | undefined;
  minutes: number | string;
}

export const ContentItem: FC<IContentItem> = ({
  title,
  minutes,
}): JSX.Element => {
  return (
    <li className='content-item'>
      <div className='content-item__header clearfix'>
        <div className='content-item__header-left'>
          <h2 className='content-item__title'>{title}</h2>
          <span className='content-item__note'>1 lesson</span>
        </div>
        <div className='content-item__header-right'>{minutes} min</div>
      </div>
      <Button className='content-item__button' hasIcon>
        <IconPlay />
      </Button>
    </li>
  );
};
