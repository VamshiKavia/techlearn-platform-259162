import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles/theme.css';
import { RoleProvider, useRole } from './context/RoleContext';
import { Sidebar } from './components/layout/Sidebar';
import { Topbar } from './components/layout/Topbar';

import Login from './pages/Login';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import InstructorDashboard from './pages/dashboard/InstructorDashboard';
import StudentDashboard from './pages/dashboard/StudentDashboard';
import Health from './pages/Health';

function RoleAwareDashboard() {
  const { role } = useRole();
  if (role === 'admin') return <AdminDashboard />;
  if (role === 'instructor') return <InstructorDashboard />;
  return <StudentDashboard />;
}

// PUBLIC_INTERFACE
function AppShell() {
  /** Top-level layout with sidebar and topbar */
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen((s) => !s);

  return (
    <div className="layout">
      {sidebarOpen && <Sidebar onNavigate={() => {}} />}
      <Topbar onToggleSidebar={toggleSidebar} />
      <main className="content" role="main" aria-live="polite">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<RoleAwareDashboard />} />
          <Route path="/health" element={<Health />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </main>
    </div>
  );
}

// PUBLIC_INTERFACE
function App() {
  /** Root app with router and RoleProvider */
  return (
    <BrowserRouter>
      <RoleProvider>
        <AppShell />
      </RoleProvider>
    </BrowserRouter>
  );
}

export default App;
