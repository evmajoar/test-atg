import React, { FC } from 'react';
import Nav from '../components/nav';
import Header from '../components/header';
import './MainLayout.sass';

export const MainLayout: FC = ({ children }): JSX.Element => {
  return (
    <>
      <div className='sidebar'>
        <Nav />
      </div>
      <div className='content'>
        <Header />
        <div>{children}</div>
      </div>
    </>
  );
};
