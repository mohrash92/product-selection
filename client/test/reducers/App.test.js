import App from "../../src/reducers/App"

describe("App", () =>{
    it("sets undefined state to object with null values", () => {
        expect(App(void 0, {})).toEqual({ data: null, error: null });
    });

    it("returns new state object with data payload", () => {

        const state = {
            data: null,
            error: null
        };

        const action = {
            type: "LOAD_DATA",
            dataPayload: {
                locationID: "LONDON",
                newsChannels: [
                    "Sky News",
                    "Sky Sports News"
                ],
                sportsChannels: [
                    "Chelsea TV",
                    "Arsenal TV"
                ]
            }
        };

        const newState = {
            data: {
                locationID: "LONDON",
                newsChannels: [
                    "Sky News",
                    "Sky Sports News"
                ],
                sportsChannels: [
                    "Chelsea TV",
                    "Arsenal TV"
                ]
            },
            error: null
        };
        expect(App(state, action)).toEqual(newState);
    });

    it("returns error when error when error payload is set", () => {

        const state = {
            data: null,
            error: null
        };

        const action = {
            type: "SET_ERROR",
            error: "There has been a problem loading this data"
        };

        const newState = {
            data: null,
            error: "There has been a problem loading this data"
        };
        expect(App(state, action)).toEqual(newState);
    });
});