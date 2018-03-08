import Basket from "../../src/reducers/Basket"

describe("Basket", () =>{
    it("sets undefined checkoutData to null", () => {
        expect(Basket(void 0, {})).toEqual({ checkoutData: null });
    });

    it("sets the channels as checkout data from payload", () => {

        const state = {
            checkoutData: null
        };

        const action = {
            type: "SEND_CHECKOUT_DATA",
            dataPayload: ["Chelsea TV", "123"]
        };

        const newState = {
            checkoutData: [
                "Chelsea TV",
            ],
            customerID: "123"
        };
        expect(Basket(state, action)).toEqual(newState);
    });


});