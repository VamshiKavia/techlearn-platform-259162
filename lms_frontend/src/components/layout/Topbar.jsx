import React from 'react';
import '../../styles/theme.css';
import { Badge } from '../common/Badge';

// PUBLIC_INTERFACE
export function Topbar({ onToggleSidebar }) {
  /** Minimal topbar with menu toggle (for small screens), notifications, and account */
  return (
    <header className="topbar" role="banner" aria-label="Application Topbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button
          className="btn"
          onClick={onToggleSidebar}
          aria-label="Toggle Sidebar"
        >
          ☰
        </button>
        <div style={{ fontWeight: 700, color: 'var(--color-primary)' }}>TechLearn LMS</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div aria-label="Notifications">
          <Badge>Notifications</Badge>
        </div>
        <button className="btn" aria-label="Account Menu">Account</button>
      </div>
    </header>
  );
}
