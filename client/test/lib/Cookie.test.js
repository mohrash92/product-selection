import Cookie from "../../src/lib/Cookie";
const cookie = new Cookie();

describe("Cookie", () =>{
    it("should set a cookie", () =>{
        cookie.setCookie("a cookie", "and its value", "/");
        expect(cookie.getCookie("a cookie")).toEqual("and its value");
    });

    it("should still set a cookie without a path", () =>{
        cookie.setCookie("a cookie", "without a path");
        expect(cookie.getCookie("a cookie")).toEqual("without a path");
    });
});