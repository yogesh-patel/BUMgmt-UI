import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import history from './history';
import "assets/css/material-dashboard-react.css?v=1.3.0";
import store from './store/configStore';
import indexRoutes from "routes/index.jsx";
import Loginpage from "views/LoginPage/LoginPage.jsx"


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <div>
        <Router history={history}>
          <Switch>
            {indexRoutes.map((prop, key) => {
              return <Route path={prop.path} component={prop.component} key={key} />;
           })}
           <Route path="/login-page" component={Loginpage}   />;
         </Switch>
        </Router>
      </div>
    </Provider>  
  </BrowserRouter>,
  document.getElementById("root")
);
