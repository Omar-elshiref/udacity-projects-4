/**
 * @jest-environment jsdom
 */


const { handleSubmit } = require("../js/formHandler")

describe('handleSubmit', ()=> {
    it('returns something', () => {
        expect(handleSubmit).toBeDefined();
    })
})