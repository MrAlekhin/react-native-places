import { TRY_AUTH, AUTH_SET_TOKEN } from "./actionTypes";
import { GOOGLE_API_KEY } from "../../../.keys";
import { uiStartLoading, uiStopLoading } from "./index";
import startMainTabs from "../../screens/MainTabs/startMainTabs";

export const tryAuth = (authData, authMode) => {
	return dispatch => {
		dispatch(uiStartLoading());
		let url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${GOOGLE_API_KEY}`;
		if (authMode === "signup") {
			url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${GOOGLE_API_KEY}`;
		}

		fetch(url, {
			method: "POST",
			body: JSON.stringify({
				email: authData.email,
				password: authData.password,
				returnSecureToken: true
			}),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.catch(err => {
				console.log(err);
				dispatch(uiStopLoading());
				alert("Authentication failed, please try again!");
			})
			.then(res => res.json())
			.then(parsedRes => {
				dispatch(uiStopLoading());

				if (!parsedRes.idToken) {
					console.log(parsedRes);

					alert("Authentication failed, please try again!");
				} else {
					dispatch(authSetToken(parsedRes.idToken));
					startMainTabs();
				}
			});
	};
};

export const authSetToken = token => {
	return {
		type: AUTH_SET_TOKEN,
		token: token
	};
};

export const authGetToken = () => {
	return (dispatch, getState) => {
		const promise = new Promise((resolve, reject) => {
			const token = getState().auth.token;
			if (!token) {
				reject();
			} else {
				resolve(token);
			}
		});
		return promise;
	};
};
