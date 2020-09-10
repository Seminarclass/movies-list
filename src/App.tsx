import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { ToastProvider } from 'react-toast-notifications';

import AppPage from './app/';

export default function App() {
  return (
    <CookiesProvider>
      <ToastProvider
        autoDismiss
        autoDismissTimeout={5000}
        placement="bottom-center"
      >
        <AppPage />
      </ToastProvider>
    </CookiesProvider>
  );
}
