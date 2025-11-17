import React from 'react';
import '../../styles/theme.css';

// PUBLIC_INTERFACE
export function Badge({ children, kind = 'default', ...rest }) {
  /** Pill-shaped badge with success/error variants */
  const classes = ['badge'];
  if (kind === 'success') classes.push('success');
  if (kind === 'error') classes.push('error');
  return (
    <span className={classes.join(' ')} {...rest}>
      {children}
    </span>
  );
}
