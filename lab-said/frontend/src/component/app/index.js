import React from 'react';
import Navbar from '../navbar';
import {Provider} from 'react-redux';
import LandingContainer from '../landing-container';
import {BrowserRouter, Route} from 'react-router-dom';
import DashboardContainer from '../dashboard-container';
import appStoreCreate from '../../lib/app-create-store';

let store = appStoreCreate();

class App extends React.Component {
  render() {
    return (
      <div className="application">
        <Provider store={store}>
          <BrowserRouter>
            <div>
            <Navbar />
            <Route path="/welcome/:auth" component={LandingContainer}/>
            <Route exact path="/dashboard" component={DashboardContainer}/>
          </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
