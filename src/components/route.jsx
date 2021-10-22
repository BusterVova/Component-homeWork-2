import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./mainPage";
import Login from "./common/login";
import App from "./app";
import Navigation from "./ui/navigation";
import OneUser from "./oneUser";
import RegisterForm from "./ui/registerForm";
import EditForm from "./ui/editForm";
const Routing = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/main" component={Main}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={RegisterForm}></Route>
        <Route path="/users" exact component={App}></Route>
        <Route
          path="/users/:id"
          exact
          render={(props) => <OneUser {...props} />}
        ></Route>
        <Route
          path="/users/:id/:edit"
          render={(props) => <EditForm {...props} />}
        ></Route>
      </Switch>
    </>
  );
};

export default Routing;
