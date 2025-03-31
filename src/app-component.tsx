import React from 'react';
import NovoNordiskDashboard from './novo-nordisk-dashboard.tsx';
import { DataProvider } from './data-context-provider.tsx';

const App = () => {
  return (
    <DataProvider>
      <NovoNordiskDashboard />
    </DataProvider>
  );
};

export default App;
