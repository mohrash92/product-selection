import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class SportsChannels extends React.Component {

    updateBasket() {
        if (this.refs.check_box.checked) {
            this.props.selectedSportsChannel(this.props.sportsChannel)
        } else {
            this.props.deselectedSportsChannel(this.props.sportsChannel)
        }
    }

    render() {
        return (
            <div className="channel-container">
                <input type="checkbox" ref="check_box" onChange={this.updateBasket.bind(this)}/>
                <label className="channel">{this.props.sportsChannel}</label>
            </div>
        );
    }
}

SportsChannels.propTypes = {
    sportsChannel: PropTypes.string,
    selectedSportsChannel: PropTypes.func.isRequired,
    deselectedSportsChannel: PropTypes.func.isRequired
};

export default connect(
    () => ({}),
    dispatch => ({
        selectedSportsChannel: sportsChannel => dispatch({
            type: "ADD_TO_BASKET", channelPayload: sportsChannel
        }),
        deselectedSportsChannel: sportsChannel => dispatch({
            type: "REMOVE_FROM_BASKET", channelPayload: sportsChannel
        })

    })
)(SportsChannels);