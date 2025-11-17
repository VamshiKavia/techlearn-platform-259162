import React from 'react';
import '../../styles/theme.css';

// PUBLIC_INTERFACE
export function Button({ children, onClick, type = 'button', variant = 'default', ariaLabel, ...rest }) {
  /** Accessible button styled to Ocean Professional palette */
  const classes = ['btn'];
  if (variant === 'primary') classes.push('primary');
  return (
    <button
      className={classes.join(' ')}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </button>
  );
}
