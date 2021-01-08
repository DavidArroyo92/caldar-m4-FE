import React from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TextInput from "../../SharedComponents/TextInput/TextInput"
import { loginWithFirebase } from "../../redux/actions/authActions";

const Login = ({ login }) => {
    const onSubmitLogin = ( values ) => {
        login (values);
    };

    return (
        <div>
            <div>
                <h1>Login</h1>
                <Form
                    onSubmit = {onSubmitLogin}
                    render = {({ handleSubmit, form, submitting, pristine, values }) => {
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Field
                                    name="email"
                                    component={TextInput}
                                    type="text"
                                    placeholder="Email..."
                                    label="Email"
                                />
                            </div>
                            <div>
                                <Field
                                    name="password"
                                    component={TextInput}
                                    type="password"
                                    placeholder="Password..."
                                    label="Password"
                                />
                            </div>
                            <div>
                                <button
                                    disabled = {submitting || pristine}
                                    primary btnLabel = "Login"
                                    type = "submit"
                                />
                            </div>
                        </form>
                    }}
                    />
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        login: loginWithFirebase
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Login);