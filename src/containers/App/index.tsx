import React from 'react';
import AppRoutes from './AppRoutes';
import ErrorBoundary from 'components/ErrorBoundary';
import NotificationToaster from 'components/NotificationToaster';

function App() {
  return (
    <ErrorBoundary>
      <AppRoutes />
      <NotificationToaster />
    </ErrorBoundary>
  );
}

export default App;
