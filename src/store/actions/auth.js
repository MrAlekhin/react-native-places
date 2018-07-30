import { TRY_AUTH } from './actionTypes';
import { GOOGLE_API_KEY } from '../../../.keys'

export const tryAuth = (authData) => {
    return dispatch => {
        dispatch(authSignup(authData))
    }
}

export const authSignup = (authData) => {
    return dispatch => {
        fetch(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=${GOOGLE_API_KEY}`, {
            method: "POST",
            body: JSON.stringify({
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            }),
            headers: {
                "Content-Type": "application/json"
            }
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