import { h } from 'preact';
import { Route, Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';

const App = () => (
  <div id="app" className="flex flex-col justify-center items-center w-full">
    <div className="max-w-screen-md w-full bg-slate-100">
      <Header />
      <main>
        <Router>
          <Route path="/public/checkout" component={Home} />
        </Router>
      </main>
    </div>
  </div>
);

export default App;
