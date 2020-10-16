import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

import AppPage from './pages/app';
import SharedPage from './pages/shared';

import GlobalState from './hooks/useGlobalState';

/*
 * The Nominator Features:
 *  * Search OMDB (limited to top 10 queries) for movies
 *  * Nominate your favorite movies on the movie watchlist (via slider menu)
 *  * Badge (by Hamburger Menu) to show the total number of nominated movies
 *  * Cookies to store session
 *  * Notifications for searching, adding, removing movies
 *  * Sharable URL Links via Firebase (copy to clipboard)
 *  * Modifiable Shared URL watchlist via Firebase
 *
 * TODO:
 * 1) Add react-transition-group for animations
 */

export default function App() {
  return (
    <ToastProvider
      autoDismiss
      autoDismissTimeout={5000}
      placement="bottom-center"
    >
      <GlobalState.Provider>
        <CookiesProvider>
          <BrowserRouter>
            <Switch>
              <Route
                path="/"
                render={() => (
                  <>
                    <Route path="/" component={AppPage} exact />
                    <Route path="/:id" component={SharedPage} />
                  </>
                )}
              />
            </Switch>
          </BrowserRouter>
        </CookiesProvider>
      </GlobalState.Provider>
    </ToastProvider>
  );
}
