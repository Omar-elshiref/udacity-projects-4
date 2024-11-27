const { isValidURL } = require("../js/urlChecker")

describe('urlValidity', ()=> {
    test('test if strings are false urls', () => {
        expect(isValidURL("read")).toBeFalsy();
    })
    
    test('emails are not considered valid urls', () => {
        expect(isValidURL("mailto:ahmed@gmail.com")).toBeFalsy();
    })
    
    test('expect urls to be true', () => {
        expect(isValidURL("https://www.google.com")).toBeTruthy();
    })

    test('expect empty string to be falsy', () => {
        expect(isValidURL("")).toBeFalsy();
    })
})