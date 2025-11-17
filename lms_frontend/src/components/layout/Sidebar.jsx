import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/theme.css';
import { useRole } from '../../context/RoleContext';

const navItemsByRole = {
  admin: [
    { to: '/dashboard', label: 'Admin Overview' },
    { to: '/dashboard', label: 'Users' },
    { to: '/dashboard', label: 'Analytics' },
  ],
  instructor: [
    { to: '/dashboard', label: 'Courses' },
    { to: '/dashboard', label: 'Assignments' },
    { to: '/dashboard', label: 'Students' },
  ],
  student: [
    { to: '/dashboard', label: 'My Courses' },
    { to: '/dashboard', label: 'Assignments' },
    { to: '/dashboard', label: 'Progress' },
  ],
};

// PUBLIC_INTERFACE
export function Sidebar({ onNavigate }) {
  /** Role-aware sidebar navigation */
  const { role, setRole } = useRole();
  const items = navItemsByRole[role] || [];

  return (
    <aside className="sidebar" aria-label="Main Sidebar Navigation">
      <div className="brand" aria-label="Application Title">TechLearn LMS</div>

      <div style={{ marginBottom: 12 }}>
        <label htmlFor="role-select" className="small-muted" style={{ display: 'block', marginBottom: 6 }}>
          Current Role
        </label>
        <select
          id="role-select"
          aria-label="Select Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{
            width: '100%',
            padding: '8px 10px',
            borderRadius: 8,
            border: '1px solid rgba(17,24,39,0.12)',
            background: '#fff'
          }}
        >
          <option value="admin">Admin</option>
          <option value="instructor">Instructor</option>
          <option value="student">Student</option>
        </select>
      </div>

      <nav className="nav" aria-label="Primary">
        {items.map((it, idx) => (
          <NavLink
            key={`${it.label}-${idx}`}
            to={it.to}
            onClick={onNavigate}
            aria-label={it.label}
          >
            <span aria-hidden="true">▸</span>
            {it.label}
          </NavLink>
        ))}
        <NavLink to="/health" onClick={onNavigate} aria-label="Health">
          <span aria-hidden="true">▸</span>
          Health
        </NavLink>
        <NavLink to="/login" onClick={onNavigate} aria-label="Login">
          <span aria-hidden="true">▸</span>
          Login
        </NavLink>
      </nav>
    </aside>
  );
}
