import React from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TextInput from "../../SharedComponents/TextInput/TextInput";
import PassInput from "../../SharedComponents/PassInput/PassInput";
import { loginWithFirebase } from "../../redux/actions/authActions";
import { Button } from "@material-ui/core";

const Login = ({ login }) => {
  const onSubmitLogin = (values) => {
    login(values);
  };

  return (
    <div>
      <div>
        <h1>Login</h1>
        <Form onSubmit={onSubmitLogin}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <Field
                  name="email"
                  component={TextInput}
                  placeholder="Email..."
                  label="Email"
                />
              </div>
              <div>
                <Field
                  name="password"
                  component={PassInput}
                  placeholder="Password..."
                  label="Password"
                />
              </div>
              <div>
                <Button type="submit" > LOGIN </Button>
              </div>
            </form>
          )}
        </Form>
      </div>
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
