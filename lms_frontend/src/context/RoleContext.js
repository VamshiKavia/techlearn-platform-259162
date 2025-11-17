import React, { createContext, useContext, useState, useMemo } from 'react';

const RoleContext = createContext(null);

// PUBLIC_INTERFACE
export function RoleProvider({ children }) {
  /** Provides current role and setter. Roles: 'admin' | 'instructor' | 'student' */
  const [role, setRole] = useState('student');
  const value = useMemo(() => ({ role, setRole }), [role]);
  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
}

// PUBLIC_INTERFACE
export function useRole() {
  /** Hook to access current role and setter */
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error('useRole must be used within RoleProvider');
  return ctx;
}
