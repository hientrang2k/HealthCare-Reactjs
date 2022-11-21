import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.scss';
import { getAllUser } from '../../../services/userService';
import AddUserPopup from '../AddUserPopup';

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: [],
      openAddPopup: false,
    };
  }

  async componentDidMount() {
    let response = await getAllUser();
    this.setState({ listUser: response?.allUsers });
  }

  handleClose = () => {
    this.setState({
      openAddPopup: !this.state.openAddPopup,
    });
  };

  render() {
    let { listUser, openAddPopup } = this.state;

    return (
      <div className=''>
        <div className='title text-center'>Manage user</div>

        <button
          className='btn-addUser'
          onClick={() => this.setState({ openAddPopup: true })}
        >
          <div className='addUser-icon'>
            <i className='fas fa-plus'></i>
          </div>
          <span>Add user</span>
        </button>

        <div className='table-users mt-3 ml-1'>
          <table id='customers'>
            <thead>
              <tr>
                <th>Email</th>
                <th>Full name</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {listUser &&
                listUser.map((user, index) => (
                  <tr key={index}>
                    <td>{user.email}</td>
                    <td>
                      {user.firstName} {user.lastName}
                    </td>
                    <td>{user.gender === 0 ? 'Nam' : 'Nữ'}</td>
                    <td>{user.address}</td>
                    <td>
                      <button className='btn-edit'>
                        <i className='fas fa-edit'></i>
                      </button>
                      <button className='btn-delete'>
                        <i className='fas fa-trash'></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <AddUserPopup open={openAddPopup} toggle={this.handleClose} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
