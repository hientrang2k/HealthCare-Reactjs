import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './img/logo.png';
import './style.scss';

class HomeHeader extends Component {

    render() {
        return (
            <div className="home-header container">
                <div className="logo-header">
                    <img alt='gg' src={logo} />
                </div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
