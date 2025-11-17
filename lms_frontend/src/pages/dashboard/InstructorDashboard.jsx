import React from 'react';
import '../../styles/theme.css';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';

// PUBLIC_INTERFACE
export default function InstructorDashboard() {
  /** Instructor placeholder dashboard with simple stats */
  return (
    <div className="content">
      <h2 style={{ marginTop: 0, marginBottom: 16 }}>Instructor Dashboard</h2>
      <div className="card-grid">
        <Card title="My Courses" subtitle="Live">
          <div style={{ fontSize: 28, fontWeight: 700 }}>6</div>
        </Card>
        <Card title="Assignments to Grade" subtitle="Pending">
          <div style={{ fontSize: 28, fontWeight: 700 }}>18</div>
        </Card>
        <Card title="Announcements">
          <Badge>2 new</Badge>
        </Card>
      </div>
    </div>
  );
}
