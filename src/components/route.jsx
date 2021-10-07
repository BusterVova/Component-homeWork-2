import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./mainPage";
import Login from "./login";
import App from "./app";
import Navigation from "./navigation";
import OneUser from "./oneUser";
const Routing = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/main" component={Main}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/users" exact component={App}></Route>
        <Route
          path="/users/:id"
          render={(props) => <OneUser {...props} />}
        ></Route>
      </Switch>
    </>
  );
};

export default Routing;
