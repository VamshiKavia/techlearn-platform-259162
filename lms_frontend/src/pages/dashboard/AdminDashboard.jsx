import React from 'react';
import '../../styles/theme.css';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';

// PUBLIC_INTERFACE
export default function AdminDashboard() {
  /** Admin placeholder dashboard with simple stats */
  return (
    <div className="content">
      <h2 style={{ marginTop: 0, marginBottom: 16 }}>Admin Dashboard</h2>
      <div className="card-grid">
        <Card title="Users" subtitle="Total registered">
          <div style={{ fontSize: 28, fontWeight: 700 }}>1,245</div>
        </Card>
        <Card title="Active Courses" subtitle="Published">
          <div style={{ fontSize: 28, fontWeight: 700 }}>42</div>
        </Card>
        <Card title="System Health" subtitle="All services">
          <Badge kind="success">Operational</Badge>
        </Card>
      </div>
    </div>
  );
}
