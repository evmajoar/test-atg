import React, { FC } from 'react';
import Button from '../button';
import { IconDashboard } from '../icon/IconDashboard';
import { IconShopingList } from '../icon/IconShopingList';
import { IconCustomer } from '../icon/IconCustomer';
import cx from 'classnames';
import './Nav.sass';

interface INavLink {
  title: string;
  href: string;
  icon: any;
}

const navLinks: INavLink[] = [
  {
    title: 'Dashboard',
    href: '#',
    icon: <IconDashboard />,
  },
  {
    title: 'Shoping',
    href: '#',
    icon: <IconShopingList />,
  },
  {
    title: 'Custormer',
    href: '#',
    icon: <IconCustomer />,
  },
];

export const Nav: FC = (): JSX.Element => {
  return (
    <div className='nav'>
      <ul className='nav__list'>
        {navLinks.map((item: INavLink, index: number) => (
          <li key={index} className='nav__item'>
            <Button
              className={cx('nav__link', { current: index === 0 })}
              href={item.href}
              aria-label={item.title}
              hasIcon
            >
              {item.icon}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
