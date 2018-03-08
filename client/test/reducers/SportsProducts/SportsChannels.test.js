import SportsChannels from "../../../src/reducers/SportsProducts/SportsChannels"

describe("SportsChannels", () =>{
    it("sets undefined channels to null", () => {
        expect(SportsChannels(void 0, {})).toEqual({sportsChannel: null });
    });

    it("returns selected state for news channels when adding to basket", () => {

        const state = {
            sportsChannel: []
        };

        const action = {
            type: "ADD_TO_BASKET",
            channelPayload: "Chelsea TV"
        };

        const newState = {
            sportsChannel: [
                "Chelsea TV"
            ]
        };
        expect(SportsChannels(state, action)).toEqual(newState);
    });

    it("adds to the existing array each time when action payload is passed", () => {
        const state = {
            sportsChannel: []
        };

        const action = {
            type: "ADD_TO_BASKET",
            channelPayload: "Sky Sports News"
        };

        const newState = {
            sportsChannel: [
                "Chelsea TV",
                "Sky Sports News"
            ]
        };
        expect(SportsChannels(state, action)).toEqual(newState);
    });

    it("removes from the existing array each time payload is passed", () => {
        const state = {
            sportsChannel: [
                "Chelsea TV",
            ]
        };

        const action = {
            type: "REMOVE_FROM_BASKET",
            channelPayload: "Chelsea TV"
        };

        const newState = {
            sportsChannel: []
        };
        expect(SportsChannels(state, action)).toEqual(newState);
    });
});