import React, { FC, useEffect } from 'react';
import { observer, useLocalObservable } from 'mobx-react-lite';
import CategoriesStore from '../../store/categories.store';
import Button from '../button';
import cx from 'classnames';
import './Categories.sass';

export const Categories: FC<{ className?: string }> = observer(
  ({ className }): JSX.Element => {
    let { categoriesData, loadCategories } = useLocalObservable(
      () => CategoriesStore
    );

    useEffect(() => loadCategories(), [loadCategories]);

    return (
      <ul className={cx('categories', 'clearfix', className)}>
        {categoriesData?.categories?.map((category: string, index: number) => (
          <li key={category} className='categories__item'>
            <Button href='#' isCurrent={index === 0}>
              {category}
            </Button>
          </li>
        ))}
      </ul>
    );
  }
);
