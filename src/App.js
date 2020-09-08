import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/login'
import Dashboard from './components/dashboard/dashboardLayout'
function App() {
  return (
    <div className="">

        <Router>
   
          <div className="">
          
            <Switch>
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
       
        </Router>
    </div>
  );
}

export default App;
