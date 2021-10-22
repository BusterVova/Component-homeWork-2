/* eslint-disable multiline-ternary */
import React, { useState } from "react";
import { useParams } from "react-router";
import LoginForm from "../ui/loginForm";
import RegisterForm from "../ui/registerForm";
import { Link } from "react-router-dom";

const Login = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(
    type === "register" ? type : "login"
  );
  const toggleFormType = () => {
    setFormType((prevState) =>
      prevState === "register" ? "login" : "register"
    );
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h3 className="mb-4">Login</h3>
          {formType === "register?" ? (
            <>
              <RegisterForm toggleFormType={toggleFormType} />
            </>
          ) : (
            <>
              <LoginForm />
              <p>
                Dont have an account?
                <Link to="/register" role="button" onClick={toggleFormType}>
                  Sign Up
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
