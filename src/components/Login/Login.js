import React from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TextInput from "../../SharedComponents/TextInput/TextInput";
import { loginWithFirebase } from "../../redux/actions/authActions";
import { Button } from "@material-ui/core";

const Login = ({ login }) => {
  const onSubmitLogin = (values) => {
    login(values);
  };

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={onSubmitLogin}>
        <div>
          <label>
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
        </div>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      login: loginWithFirebase,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Login);
