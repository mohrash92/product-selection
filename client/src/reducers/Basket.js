export default (state, action) => {
    if (typeof state === "undefined") {
        return { checkoutData: null };
    }
    /* break the checkout data and customerID cookie into separate parts and
     * make them available to access for the confirmation page */
    switch (action.type) {
        case "SEND_CHECKOUT_DATA": {
            let newState = Object.assign({}, state);
            newState.customerID = action.dataPayload.pop();
            newState.checkoutData = action.dataPayload;
            return newState;
        }
    }
    return state;
};