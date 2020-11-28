import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import Login from "./Login";
import SignUp from "./SignUp";
import PasswordForget from "./PasswordForget";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/login`}
            component={Login}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/password-forget`}
            component={PasswordForget}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/sign-up`}
            component={SignUp}
          />
          <Route path={`/`} component={App} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
