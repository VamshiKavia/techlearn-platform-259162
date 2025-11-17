import React from 'react';
import '../../styles/theme.css';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';

// PUBLIC_INTERFACE
export default function StudentDashboard() {
  /** Student placeholder dashboard with simple stats */
  return (
    <div className="content">
      <h2 style={{ marginTop: 0, marginBottom: 16 }}>Student Dashboard</h2>
      <div className="card-grid">
        <Card title="Enrolled Courses">
          <div style={{ fontSize: 28, fontWeight: 700 }}>3</div>
        </Card>
        <Card title="Upcoming Deadlines">
          <div style={{ fontSize: 28, fontWeight: 700 }}>4</div>
        </Card>
        <Card title="Progress">
          <Badge kind="success">On Track</Badge>
        </Card>
      </div>
    </div>
  );
}
