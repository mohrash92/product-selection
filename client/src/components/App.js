import React from "react";
import Cookie from "../lib/Cookie";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SportsProducts from "./SportsProducts/SportsProducts";
import NewsProducts from "./NewsProducts/NewsProducts";
import Basket from "./Basket";
import ConfirmationPage from "./ConfirmationPage";

import "../styles/app.css";

const cookie = new Cookie();

class App extends React.Component {

    componentDidMount() {
        /* this customerID cookie value is set as 123 for now. In the real word scenario
        we would be using a real customers ID and just retrieve it when we want with getCookie */
        cookie.setCookie("customerID", "123", "/");

        if (this.props.data === null) {
            this.props.axios.get(`http://localhost:3000/users/${cookie.getCookie("customerID")}`)
                .then(res => {
                    this.props.setData(res.data);
                })
                .catch(error => {
                    this.props.setError("unable to load data :" + error);
                });
        }
    }

    render() {
        /* show the confirmation page or the initial selection page based on
        the checkout Data passed in from the basket reducer state */
        if (this.props.checkoutData) {
            return <ConfirmationPage
                confirmationData={this.props.checkoutData}
                customerID={this.props.customerID}
            />
        } else {

            if (this.props.data === null) {
                if (this.props.error) {
                    console.log(this.props.error); // eslint-disable-line no-console
                }
                return null;
            }

            return <div className="main-container">
                <div id="top-image-container" title="game-of-thrones">
                    <img src="../images/sky-logo.jpg" title="sky-logo"/>
                </div>
                <div className="products-container">

                    <SportsProducts sportsChannels={this.props.data.sportsChannels}/>
                    <NewsProducts newsChannels={this.props.data.newsChannels}/>
                    <Basket/>
                </div>
                <div id="bottom-image-container" title="boxing-image">
                </div>
            </div>;
        }
    }
}

App.propTypes = {
    axios: PropTypes.func.isRequired,
    data: PropTypes.object,
    setData: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
    error: PropTypes.func,
    checkoutData: PropTypes.array,
    customerID: PropTypes.string
};

export default connect(
    state => ({
        // create a smart component by passing state into component coming from app reducer and use it as props
        data: state.app.data,
        error: state.app.error,
        checkoutData: state.basket.checkoutData,
        customerID: state.basket.customerID
    }),
    dispatch => ({
        // dispatch action.type and payload
        setData: data => dispatch({ type: "LOAD_DATA", dataPayload: data }),
        setError: error => dispatch({ type: "SET_ERROR", error: error })
    })
)(App);
