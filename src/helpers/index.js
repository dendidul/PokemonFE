import { appConfig } from "../Constants";
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

export function getApiBaseUrl() {
    return appConfig.API_BASE_URL;
}

export function getPokemonBeUrl() {
    return appConfig.POKEMON_BE_URL;
}

export function getCookie(a) {
    // var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
    // return b ? b.pop() : '';
    return read_cookie(a);
}

export function setCookie(name, value, days) {
    // var expires = "";
    // if (days) {
    //     var date = new Date();
    //     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    //     expires = "; expires=" + date.toUTCString();
    // }
    // document.cookie = name + "=" + (value || "") + expires + "; path=/";
    bake_cookie(name, value);
}
export function eraseCookie(name) {   
    delete_cookie(name); 
}