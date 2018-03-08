import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SportsChannels from "./SportsChannels";

class SportsProducts extends React.Component {

    render() {
        return (
            <div className="column">
                <div className="column-heading">Sports</div>
                {
                    this.props.sportsChannels.map((sportsChannel, key) => {
                        return <SportsChannels key={key} sportsChannel={sportsChannel} />
                    })
                }
            </div>
        );
    }
}

SportsProducts.propTypes = {
    sportsChannels: PropTypes.array,
};

export default connect(

)(SportsProducts);


