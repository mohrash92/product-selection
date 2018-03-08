import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NewsChannels from "./NewsChannels";

class NewsProducts extends React.Component {

    render() {
        /* seperate the channels into a seperate component to keep things more organised */
        return <div className="column">
            <div className="column-heading">News</div>
            {
                this.props.newsChannels.map((newsChannel, key) => {
                    return <NewsChannels key={key} newsChannel={newsChannel} />
                })
            }
        </div>;
    }
}

NewsProducts.propTypes = {
    newsChannels: PropTypes.array,
};

export default connect(

)(NewsProducts);


