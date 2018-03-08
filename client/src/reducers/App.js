export default (state, action) => {
    if (typeof state === "undefined") {
        return { data: null, error: null };
    }
    /* Load the data and send it, otherwise set an error and make that available */
    switch (action.type) {
        case "LOAD_DATA":
            return Object.assign({}, state, { data: action.dataPayload, error: null });
        case "SET_ERROR":
            return Object.assign({}, state, { error: action.error });
    }

    return state;
};
