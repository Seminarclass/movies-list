import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

import AppPage from './app/';

export default function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <ToastProvider
          autoDismiss
          autoDismissTimeout={5000}
          placement="bottom-center"
        >
          <Switch>
            <Route
              path="/"
              render={() => (
                <>
                  <Route path="/" component={AppPage} exact />
                  <Route path="/:id" component={AppPage} />
                </>
              )}
            />
          </Switch>
        </ToastProvider>
      </BrowserRouter>
    </CookiesProvider>
  );
}
