import React from 'react';
import Categories from '../categories';
import Title from '../title';
import './Header.sass';

export const Header: React.FC = (): JSX.Element => {
  return (
    <div className='header clearfix'>
      <Title title='Courses' className='header__title' />
      <Categories className='header__categories' />
    </div>
  );
};

export default Header;
