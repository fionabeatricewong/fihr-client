import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Layout from '../Layout'
import messages from '../AutoDismissAlert/messages'
import { show } from '../../api/patient'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import remove from '../../delete_button.png'
import edit from '../../edit_button.png'

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

  deletePatient = (user) => {
    const { msgAlert } = this.props
    axios({
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      url: `${apiUrl}/patients/${this.props.match.params.id}`,
      method: 'DELETE'
    })
      .then(() => msgAlert({
        heading: 'Patient deleted',
        message: messages.patientDeleteSuccess,
        variant: 'success'
      }))
      // update their `deleted` state to be `true`
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
      .catch(error => {
        msgAlert({
          heading: 'Failed to delete.' + error.message,
          message: messages.patientDeleteFailure,
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
        // Redirect to the patient index ('/patients')
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
        <button className="delete-button"><img src={remove} className="delete-patient" onClick={this.deletePatient}/></button> <Link to={`/patients/${this.props.match.params.id}/edit`}><img src={edit} className="edit-patient"/></Link>
      </Layout>
    )
  }
}

export default PatientShow
