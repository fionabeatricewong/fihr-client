import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Layout from '../Layout'
import messages from '../AutoDismissAlert/messages'
import { show } from '../../api/patient'

class PatientShow extends Component {
  constructor (props) {
    // this makes sure that `this.props` is set in the constructor
    super(props)

    this.state = {
      // Initially, our patient state will be null, until the API request finishes:
      patient: null,
      // Initially, this patient has not been deleted yet:
      deleted: false
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props
    show(this.props.match.params.id, user)
      .then(res => this.setState({ patient: res.data.patient }))
      .then(() => msgAlert({
        heading: 'Success',
        message: messages.patientShowSuccess,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Can\'t seem to find this patient. ' + error.message,
          message: messages.patientShowFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    // destructure out patient property out of state
    const { patient, deleted } = this.state

    // if no patient:
    if (!patient) {
      return <p>Loading...</p>
    }

    // if the deleted state is true
    if (deleted) {
      // redirect to the home page
      return <Redirect to={{
        // Redirect to the home page ('/')
        pathname: '/patients',
        // Pass along a message, in state, that we can show
        state: { message: 'Deleted patient successfully' }
      }} />
    }

    return (
      <Layout>
        <p>{patient.firstName} {patient.middleName} {patient.lastName}</p>
        <p>DOB: {patient.dob} Gender: {patient.gender}</p>
        <p>Contact</p>
        <p>Phone #: {patient.phone}</p>
        <p>E-mail: {patient.email}</p>
      </Layout>
    )
  }
}

export default PatientShow
