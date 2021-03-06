import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { patientEdit } from '../../api/patient'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Layout from '../../components/Layout'

class PatientEdit extends Component {
  constructor () {
    super()

    this.state = {
      firstName: '',
      middleName: '',
      lastName: '',
      dob: '',
      gender: '',
      phone: '',
      email: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onPatientEdit = event => {
    event.preventDefault()

    const { msgAlert, history, user } = this.props

    patientEdit(this.props.match.params.id, user, this.state)
      .then(() => msgAlert({
        heading: 'Updated!',
        message: messages.patientEditSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/patients'))
      .catch(error => {
        this.setState({ firstName: '', middleName: '', lastName: '', dob: '', gender: '', phone: '', email: '' })
        msgAlert({
          heading: 'No changes made ' + error.message,
          message: messages.patientEditFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { firstName, middleName, lastName, dob, gender, phone, email } = this.state

    return (
      <Layout>
        <div className="row">
          <div className="col-sm-10 col-md-8 mx-auto mt-5">
            <h3>Edit Patient Info</h3>
            <Form onSubmit={this.onPatientEdit}>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={firstName}
                  // placeholder="First Name"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="middleName">
                <Form.Label>Middle Initial / Name</Form.Label>
                <Form.Control
                  type="text"
                  name="middleName"
                  value={middleName}
                  // placeholder="Middle Initial/Name"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={lastName}
                  // placeholder="Last Name"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="dob">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  value={dob}
                  // placeholder="MM/DD/YYYY"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  type="text"
                  name="gender"
                  value={gender}
                  placeholder="female, male, or unspecified"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={phone}
                  placeholder="(XXX)-XXX-XXXX"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={email}
                  placeholder="example@email.com"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
              >
                Update
              </Button>
            </Form>
          </div>
        </div>
      </Layout>
    )
  }
}

export default withRouter(PatientEdit)
