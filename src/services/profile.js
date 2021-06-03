import request from "superagent";
import { getApiBaseUrl } from "../helpers";


export async function getDetailTalent(params) {
    return new Promise((resolve, reject) => {
      request
        .get(`${getApiBaseUrl()}/api/Account/Profile?`)
        .query(params)
        .end((err, res) => {
          if (err) {
            reject(err);
            return false;
          }
          resolve(res.body);
        });
    });
  }
  

export async function getOrderList(params) {
    return new Promise((resolve, reject) => {
      request
        .get(`${getApiBaseUrl()}/api/Account/WorkSpace?`)
        .query(params)
        .end((err, res) => {
          if (err) {
            reject(err);
            return false;
          }
          resolve(res.body);
        });
    });
  }
export async function getFavourite(params) {
    return new Promise((resolve, reject) => {
      request
        .get(`${getApiBaseUrl()}/api/Account/WishlistList?`)
        .query(params)
        .end((err, res) => {
          if (err) {
            reject(err);
            return false;
          }
          resolve(res.body);
        });
    });
  }