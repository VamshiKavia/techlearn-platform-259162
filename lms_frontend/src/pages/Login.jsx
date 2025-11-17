import React from 'react';
import '../styles/theme.css';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';

// PUBLIC_INTERFACE
export default function Login() {
  /** Placeholder login - no real auth */
  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: no auth; navigate handled via router elsewhere
    alert('Mock login: This is a placeholder. Implement real auth later.');
  };

  return (
    <div className="content" role="main">
      <div style={{ maxWidth: 420, margin: '40px auto' }}>
        <Card title="Welcome back" subtitle="Sign in to your account">
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="email" className="small-muted" style={{ display: 'block', marginBottom: 6 }}>
                Email
              </label>
              <input id="email" type="email" required placeholder="you@example.com"
                     style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid rgba(17,24,39,0.12)' }} />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label htmlFor="password" className="small-muted" style={{ display: 'block', marginBottom: 6 }}>
                Password
              </label>
              <input id="password" type="password" required placeholder="********"
                     style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid rgba(17,24,39,0.12)' }} />
            </div>
            <Button variant="primary" type="submit" ariaLabel="Sign in">Sign In</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
