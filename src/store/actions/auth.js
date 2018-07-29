import { TRY_AUTH } from './actionTypes';

export const tryAuth = (authData) => {
    return dispatch => {
        dispatch(authSignup(authData))
    }
}

export const authSignup = (authData) => {
    return dispatch => {
        fetch("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=AIzaSyC74zClxpl24iQOzRB3O1QsfRchw4WOgkg", {
            method: "POST",
            body: JSON.stringify({
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            })
        }).catch(err => {
            console.log(err);
            alert("Authentication failed, please try again!");
        })
            .then(res => res.json())
            .then(parseRes => {
                console.log(parseRes);

            })
    }
}