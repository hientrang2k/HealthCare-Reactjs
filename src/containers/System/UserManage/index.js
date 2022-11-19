import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './style.scss';
import { getAllUser } from "../../../services/userService"

class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listUser: []
        }
    }

    async componentDidMount() {
        let response = await getAllUser();
        this.setState({ listUser: response?.allUsers })
    }


    render() {
        let { listUser } = this.state;

        return (
            <div className="">
                <div className="title text-center">Manage user</div>
                <div className="table-users mt-3 ml-1">
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>Full name</th>
                            <th>Gender</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        {listUser && listUser.map((user, index) => (
                            <tr>
                                <td>{user.email}</td>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>{user.gender === 0 ? "Nam" : "Nữ"}</td>
                                <td>{user.address}</td>
                                <td>
                                    <button className="btn-edit"><i class="fas fa-edit"></i></button>
                                    <button className="btn-delete"><i class="fas fa-trash" ></i></button>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
