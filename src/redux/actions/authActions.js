import {
    LOGIN_FETCHING,
    LOGIN_FULFILLED,
    LOGIN_REJECTED,
    LOGOUT_FETCHING,
    LOGOUT_FULFILLED,
    LOGOUT_REJECTED,
    SET_AUTHENTIFICATION
} from '../types/types-auth';
import Firebase from "../../firebase"

const loginFetching = () => {
    return {
        type: LOGIN_FETCHING
    }
};
const loginFulfilled = () => {
    return {
        type: LOGIN_FULFILLED
    }
};
const loginRejected = () => {
    return {
        type: LOGIN_REJECTED
    }
};
export const loginWithFirebase = credentials => dispatch => {
    dispatch(loginFetching());
    return Firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(async (res) => {
        const token = await res.user.getIdToken();
        localStorage.setItem("token",token);
        return dispatch(loginFulfilled());
    })
    .catch(() => {
        return dispatch(loginRejected());
    })
};

export const setAuthentication = () => {
    return {
        type: SET_AUTHENTIFICATION
    }
};

const logoutFetching = () => {
    return {
        type: LOGOUT_FETCHING
    }
};
const logoutFulfilled = (data) => {
    return {
        type: LOGOUT_FULFILLED
    }
};
const logoutRejected = () => {
    return {
        type: LOGOUT_REJECTED
    }
};
export const logout = () => dispatch => {
    dispatch(logoutFetching());
    return Firebase.auth().signOut()
    .then(() => {
        localStorage.removeItem("token");
        return dispatch(logoutFulfilled());
    })
    .catch(() => {
        return dispatch(logoutRejected());
    })
};