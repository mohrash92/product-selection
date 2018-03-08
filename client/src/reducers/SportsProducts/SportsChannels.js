let arr=[];
export default (state, action) => {
    if (typeof state === "undefined") {
        return { sportsChannel: null };
    }

    switch (action.type) {
        case "ADD_TO_BASKET": {
            let selectedState = Object.assign({}, state);
            arr.push(action.channelPayload);
            selectedState.sportsChannel = arr;
            return selectedState;
        }
        case "REMOVE_FROM_BASKET": {
            let removeState = Object.assign({}, state);

            const index = removeState.sportsChannel.indexOf(action.channelPayload);
            if (index !== -1) {
                removeState.sportsChannel.splice(index, 1);
            }
            return removeState;
        }
    }
    return state;
};
