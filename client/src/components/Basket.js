import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Cookie from "../lib/Cookie";

const cookie = new Cookie();

class Basket extends React.Component {

    handleCheckout() {

        this.props.channel.sportsChannel.push(cookie.getCookie("customerID"));
        this.props.sendCheckoutData(this.props.channel.sportsChannel)
    }

    render() {

        if (this.props.channel=== null) {
            return null;
        }
        /* render an empty basket and unclickable checkout button unless at least 1 channel is selected by the user */
        if (this.props.channel.sportsChannel === null || this.props.channel.sportsChannel.length === 0) {
            return <div className="column">
                    <div className="column-heading">Basket</div>
                <div id="basket-message">Basket is Empty</div>
                <button id="faded-checkout-button">Checkout</button>
            </div>
        }

        return <div className="column">
            <div className="column-heading">Basket</div>
            <ul id="basket-items">
            {
                this.props.channel.sportsChannel.map((channel) => {
                    return <li id="basket-item" key={channel.toString()}>{channel}</li>
                })
            }
            </ul>
            <button className="button" onClick={this.handleCheckout.bind(this)}>Checkout</button>
        </div>
    }
}

Basket.propTypes = {
    channel: PropTypes.object,
    sendCheckoutData: PropTypes.func
};

export default connect(
    state => ({
        channel: state.sportsChannel
    }),
    dispatch => ({
        sendCheckoutData: data => dispatch({ type: "SEND_CHECKOUT_DATA", dataPayload: data })
    })
)(Basket);
