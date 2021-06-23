import React, { FC } from 'react';
import cx from 'classnames';
import './Button.sass';

interface IButtonProps {
  href?: string;
  hasIcon?: boolean;
  isCurrent?: boolean;
  className?: string;
  [propKey: string]: any;
}

export const Button: FC<IButtonProps> = ({
  href,
  hasIcon = false,
  isCurrent,
  className,
  children,
  ...rest
}) => {
  const mainClassname = 'button';
  let mainClasses = cx(
    mainClassname,
    {
      [mainClassname + '--as-link']: href ?? '',
      [mainClassname + '--as-icon']: hasIcon,
    },
    className
  );

  if (href) {
    return (
      <a
        className={cx(mainClasses, {
          current: isCurrent,
        })}
        href={href}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={mainClasses} type='button' {...rest}>
      {children}
    </button>
  );
};
