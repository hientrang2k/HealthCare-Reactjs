import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from 'reactstrap';
import './style.scss';

class AddUserPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      address: '',
      gender: null,
      role: null,
      phoneNumber: '',
    };
  }

  handleChange = (event, name) => {
    let newObject = { ...this.state };
    newObject[name] = event.target.value;
    this.setState({ ...newObject });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    let { toggle, open } = this.props;
    let {
      email,
      password,
      address,
      role,
      firstName,
      lastName,
      gender,
      phoneNumber,
    } = this.state;
    return (
      <Modal
        isOpen={open}
        centered
        toggle={() => {
          toggle();
        }}
        className=''
        size='md'
      >
        <ModalHeader
          toggle={() => {
            toggle();
          }}
        >
          Modal title
        </ModalHeader>
        <ModalBody>
          <Form className='form-add-new-user'>
            <FormGroup>
              <Label for='email'>Email</Label>
              <Input
                type='email'
                name='email'
                id='email'
                value={email}
                placeholder='Email'
                onChange={(event) => {
                  this.handleChange(event, 'email');
                }}
              />
            </FormGroup>
            <Row>
              <Col xs={6}>
                <FormGroup>
                  <Label for='password'>Password</Label>
                  <Input
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    placeholder='Password'
                    onChange={(event) => {
                      this.handleChange(event, 'password');
                    }}
                  />
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup>
                  <Label for='role'>Role</Label>
                  <Input
                    type='select'
                    name='role'
                    id='role'
                    value={role}
                    onChange={(event) => {
                      this.handleChange(event, 'role');
                    }}
                  >
                    <option>...Choose role</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Clinic</option>
                    <option value={3}>Doctor</option>
                    <option value={4}>User</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <FormGroup>
                  <Label for='firstName'>First name</Label>
                  <Input
                    type='text'
                    name='firstName'
                    id='firstName'
                    value={firstName}
                    placeholder='First Name'
                    onChange={(event) => {
                      this.handleChange(event, 'firstName');
                    }}
                  />
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup>
                  <Label for='lastName'>Last Name</Label>
                  <Input
                    type='text'
                    name='lastName'
                    id='lastName'
                    value={lastName}
                    placeholder='Last Name'
                    onChange={(event) => {
                      this.handleChange(event, 'lastName');
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>

            <FormGroup>
              <Label for='address'>Address</Label>
              <Input
                type='text'
                name='address'
                id='address'
                value={address}
                placeholder='Address'
                onChange={(event) => {
                  this.handleChange(event, 'address');
                }}
              />
            </FormGroup>
            <Row>
              <Col xs={6}>
                <FormGroup>
                  <Label for='phoneNumber'>Phone number</Label>
                  <Input
                    type='text'
                    name='phoneNumber'
                    id='phoneNumber'
                    value={phoneNumber}
                    placeholder='Phone Number'
                    onChange={(event) => {
                      this.handleChange(event, 'phoneNumber');
                    }}
                  />
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup>
                  <Label for='gender'>Gender</Label>
                  <Input
                    type='select'
                    name='gender'
                    id='gender'
                    value={gender}
                    placeholder='Select gender'
                    onChange={(event) => {
                      this.handleChange(event, 'gender');
                    }}
                  >
                    <option>...Choose gender</option>
                    <option value={0}>Nam</option>
                    <option value={1}>Nữ</option>
                    <option value={2}>Khác</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color='primary'
            onClick={() => {
              this.handleSubmit();
              toggle();
            }}
          >
            Add
          </Button>{' '}
          <Button
            color='secondary'
            onClick={() => {
              toggle();
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserPopup);
