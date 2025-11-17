import React from 'react';
import '../../styles/theme.css';

// PUBLIC_INTERFACE
export function Card({ title, subtitle, children, footer }) {
  /** Minimal elevated card with title and optional footer */
  return (
    <div className="card" role="group" aria-roledescription="card">
      {title && <div style={{ fontWeight: 600, marginBottom: 6 }}>{title}</div>}
      {subtitle && <div className="small-muted" style={{ marginBottom: 12 }}>{subtitle}</div>}
      <div>{children}</div>
      {footer && <div style={{ marginTop: 12 }}>{footer}</div>}
    </div>
  );
}
