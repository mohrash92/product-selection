/* This helper class allows to create a cookie and then read it when required.
 * This is useful as it is easy to test, can be widely used across the app,
 * and easily maintainable and extendable
 */

import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Cookie {
    constructor() {
        this.cookies = cookies;
    }

    setCookie(name, value, path) {
       this.cookies.set(name, value, { path: path });
    }

    getCookie(name) {
       return this.cookies.get(name)
    }
}

module.exports = Cookie;