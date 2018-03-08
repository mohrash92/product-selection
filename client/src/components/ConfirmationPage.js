import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ConfirmationPage extends React.Component {

    postData() {
        // here we can post sme data to a desired endpoint
        console.log(this.props.confirmationData); // eslint-disable-line no-console
        console.log(this.props.customerID); // eslint-disable-line no-console
    }

    goBack() {
        window.location.reload();
    }

    render() {
        return <div className="confirmation-page">
            <div className="column-heading">Confirm your selections</div>
            <ul id="basket-items">
                {
                    this.props.confirmationData.map(channel => {
                        return <li id="basket-item" key={channel.toString()}>{channel}</li>
                    })
                }
            </ul>
            <div id="confirmation-button-wrapper">
                <button id="confirm-checkout-button" onClick={this.postData.bind(this)}>Confirm</button>
                <button id="go-back-button" onClick={this.goBack.bind(this)}>Go Back</button>
            </div>
        </div>

    }
}

ConfirmationPage.propTypes = {
    confirmationData: PropTypes.array.isRequired,
    customerID: PropTypes.string.isRequired,
};

export default connect(
    state => ({
        channel: state.sportsChannel
    })
)(ConfirmationPage);