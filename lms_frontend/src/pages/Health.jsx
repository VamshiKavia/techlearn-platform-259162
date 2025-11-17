import React from 'react';
import '../styles/theme.css';
import { getConfig } from '../utils/config';
import { Card } from '../components/common/Card';

// PUBLIC_INTERFACE
export default function Health() {
  /** Health page renders OK and shows configured path */
  const { HEALTHCHECK_PATH = '/health' } = getConfig();
  return (
    <div className="content">
      <Card title="Healthcheck">
        <div>OK</div>
        <div className="small-muted" style={{ marginTop: 8 }}>
          Healthcheck path: <code>{HEALTHCHECK_PATH}</code>
        </div>
      </Card>
    </div>
  );
}
