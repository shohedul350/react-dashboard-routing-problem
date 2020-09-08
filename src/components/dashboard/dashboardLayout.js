import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import {routes} from './dashboardRoute'


export default function dashboardLayout() {



    return (
        <div>
            <div className="header" style={{height:"80px",width:"100%",backgroundColor:"blue"}}>
              <p>Header</p>
            </div>

    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "40%",
            background: "#f0f0f0"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
              <h3>Sidebar menu</h3>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/dashboard/add-user">Add Use</Link>
            </li>
            <li>
              <Link to="/dashboard/all-user">All user</Link>
            </li>
            <li>
              <Link to="/dashboard/my-profile">My Profile</Link>
            </li>
          </ul>


        </div>
                 {/* // all content rendering */}
                <div style={{ flex: 1, padding: "10px",backgroundColor:"red"}}>
                <Switch>
                    {routes.map((route, index) => (
                    
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.main />}
                    />
                    ))}
                </Switch>
                </div>
      </div>
    </Router>
            
        </div>
    )
}
