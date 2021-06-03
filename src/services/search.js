
import request from "superagent";
import { getApiBaseUrl } from "../helpers";

export async function searchVideo(params) {
    return new Promise((resolve, reject) => {
      request
        .get(`${getApiBaseUrl()}/api/Talent/ListTalentVideo`)
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