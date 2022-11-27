import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.scss';
import { getAllUser, addNewUser, deleteUser, editUser } from '../../../services/userService';
import AddUserPopup from '../AddUserPopup';
import EditUserPopup from '../EditUserPopUp';

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: [],
      openAddPopup: false,
      openEditPopup: false,
      editUserId: null
    };
  }

  async componentDidMount() {
    await this.handleGetAllUsers();
  }

  handleGetAllUsers = async () => {
    let response = await getAllUser();
    this.setState({ listUser: response?.allUsers });
  }

  handleClose = () => {
    this.setState({
      openAddPopup: false,
      openEditPopup: false
    });
  };

  handleAddUser = async (values) => {
    try {
      let data = await addNewUser(values);
      if (data && data.errCode === 0) {
        await this.handleGetAllUsers();
        this.setState({ openAddPopup: false })
      } else {
        alert(data.errMessage);
      }
    } catch (e) {
      console.error(e);
    }
  }

  handleSubmitEdit = async (values) => {
    try {
      let data = await editUser(values);
      if (data && data.errCode === 0) {
        await this.handleGetAllUsers();
        this.setState({ openEditPopup: false })
      } else {
        alert(data.errMessage);
      }
    } catch (e) {
      console.error(e);
    }
  }

  handleDeleteUser = async (user) => {
    try {
      let response = await deleteUser(user?.id);
      if (response && response.errCode === 0) {
        await this.handleGetAllUsers();
      } else {
        alert(response.errMessage);
      }
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    let { listUser, openAddPopup, openEditPopup, editUserId } = this.state;
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
              <tr >
                <th className='text-center'>STT</th>
                <th >Email</th>
                <th >Full name</th>
                <th >Gender</th>
                <th >Address</th>
                <th >Phone number</th>
                <th>Role</th>
                <th className='text-center'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {listUser &&
                listUser.map((user, index) => (
                  <tr key={index}>
                    <td className='text-center'>{index + 1}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.firstName} {user.lastName}
                    </td>
                    <td>{user.gender === 0 ? 'Nam' : user.gender === 1 ? 'Nữ' : "Khác"}</td>
                    <td>{user.address}</td>
                    <td>{user.phoneNumber}</td>
                    <td>
                      {user.typeRole === '1' ? 'Admin' :
                        user.typeRole === '2' ? "Clinic" :
                          user.typeRole === '3' ? "Doctor" :
                            "User"}
                    </td>
                    <td className='text-center' >
                      <button
                        className='btn-edit'
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Edit"
                        onClick={() => this.setState({ openEditPopup: true, editUserId: user.id })}
                      >
                        <i className='fas fa-edit'></i>
                      </button>
                      <button
                        className='btn-delete'
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Delete"
                        onClick={() => this.handleDeleteUser(user)}
                      >
                        <i className='fas fa-trash'></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {openAddPopup && <AddUserPopup open={openAddPopup} toggle={this.handleClose} handleSubmit={this.handleAddUser} />}
        {openEditPopup && <EditUserPopup open={openEditPopup} toggle={this.handleClose} handleSubmitEdit={this.handleSubmitEdit} data={editUserId} />}
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
