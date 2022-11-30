import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './img/logo.svg';
import './style.scss';

class HomeHeader extends Component {

    render() {
        return (
            <div className="home-header">
                <div className="row">
                    <div className="col-3 header-logo">
                        {/* <i className="fas fa-bars header-bar"></i> */}
                        <img alt='gg' src={logo} />
                    </div>
                    <div className="col-6 header-list" >
                        <div className="header-item">
                            <div className="item-title">Chuyên khoa</div>
                            <div className="item-content">Tìm bác sĩ theo chuyên khoa</div>
                        </div>
                        <div className="header-item">
                            <div className="item-title">Chuyên khoa</div>
                            <div className="item-content">Tìm bác sĩ theo chuyên khoa</div>
                        </div>
                        <div className="header-item">
                            <div className="item-title">Chuyên khoa</div>
                            <div className="item-content">Tìm bác sĩ theo chuyên khoa</div>
                        </div>
                        <div className="header-item">
                            <div className="item-title">Chuyên khoa</div>
                            <div className="item-content">Tìm bác sĩ theo chuyên khoa</div>
                        </div>
                    </div>
                    <div className="col-3 header-support">
                        <i className="far fa-question-circle"></i>
                        <div>Hỗ trợ</div>
                    </div>

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
