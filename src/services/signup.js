import request from "superagent";
import { getApiBaseUrl,getPokemonBeUrl } from "../helpers";

export async function ValidateLogin(params) {
  return new Promise((resolve, reject) => {
    request
      .post(`${getPokemonBeUrl()}/api/PokemonData/ValidateLogin`)
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


