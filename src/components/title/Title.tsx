import React, { FC } from 'react';
import cx from 'classnames';
import './Title.sass';

interface ITitleProps {
  title: string;
  className?: string;
}

export const Title: FC<ITitleProps> = ({ title, className }): JSX.Element => {
  return <h1 className={cx('title', className)}>{title}</h1>;
};
