import request from "superagent";
import { getApiBaseUrl } from "../helpers";


export async function signupWithEmail(params) {
  return new Promise((resolve, reject) => {
    request
      .post(`${getApiBaseUrl()}/api/Account/PreSignUpPost`)
      .send(params)
      .end((err, res) => {
        if (err) {
          reject(err);
          return false;
        }
        resolve(res.body);
      });
  });
}

export async function checkEmailUse(params) {
  return new Promise((resolve, reject) => {
    request
      .post(`${getApiBaseUrl()}/api/Account/VerifyEmailUsed`)
      .send(params)
      .end((err, res) => {
        if (err) {
          reject(err);
          return false;
        }
        resolve(res.body);
      });
  });
}

export async function signUpVerification(params) {
  return new Promise((resolve, reject) => {
    request
      .put(`${getApiBaseUrl()}/api/Account/VerifyCodeSignUp`)
      .send(params)
      .end((err, res) => {
        if (err) {
          reject(err);
          return false;
        }
        resolve(res.body);
      });
  });
}
export async function forgotPassword(params) {
  return new Promise((resolve, reject) => {
    request
      .put(`${getApiBaseUrl()}/api/Account/SendEmailForgetPassword`)
      .send(params)
      .end((err, res) => {
        if (err) {
          reject(err);
          return false;
        }
        resolve(res.body);
      });
  });
}

export async function signupWithGoogle(params) {
  return new Promise((resolve, reject) => {
    request
      .post(`${getApiBaseUrl()}/api/Account/ExternalLogin?provider=google`)
      .send(params)
      .end((err, res) => {
        if (err) {
          reject(err);
          return false;
        }
        resolve(res.body);
      });
  });
}


export async function login(params) {
  return new Promise((resolve, reject) => {
    request
      .post(`${getApiBaseUrl()}/api/AdmAccount/Login`)
      .send(params)
      .end((err, res) => {
        if (err) {
          reject(err);
          return false;
        }
        resolve(res.body);
      });
  });
}