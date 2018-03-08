import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class NewsChannels extends React.Component {

    updateBasket() {
        /* check if the channel has been selected, if it has then pass this
         * data into the reducer as a payload so that it can be accessed later */
        if (this.refs.check_box.checked) {
            this.props.selectedNewsChannel(this.props.newsChannel)
        } else {
            this.props.deselectedNewsChannel(this.props.newsChannel)
        }
    }

    render() {
        return <div className="channel-container">
            <input type="checkbox" ref="check_box" onChange={this.updateBasket.bind(this)}/>
            <label className="channel">{this.props.newsChannel}</label>
        </div>;
    }
}

NewsChannels.propTypes = {
    newsChannel: PropTypes.string,
    selectedNewsChannel: PropTypes.func.isRequired,
    deselectedNewsChannel: PropTypes.func.isRequired
};

export default connect(
    () => ({}),
    dispatch => ({
        selectedNewsChannel: newsChannel => dispatch({
            type: "ADD_TO_BASKET", channelPayload: newsChannel
        }),
        deselectedNewsChannel: newsChannel => dispatch({
            type: "REMOVE_FROM_BASKET", channelPayload: newsChannel
        })

    })
)(NewsChannels);