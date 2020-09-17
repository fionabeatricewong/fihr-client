import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { index } from '../../api/patient'
import messages from '../AutoDismissAlert/messages'
import Layout from '../../components/Layout'
import add from '../../add_button.png'
// import Table from 'react-bootstrap/Table'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact'

class Patients extends Component {
  constructor () {
    super()
    this.state = {
      patients: []
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props
    index(this.state, user)
      .then(res => this.setState({ patients: res.data.patients }))
      .then(() => msgAlert({
        heading: 'Here are all your patients!',
        message: messages.patientIndexSuccess,
        variant: 'success'
      }))
      // .then(() => history.push('/'))
      .catch(error => {
        msgAlert({
          heading: 'Can\'t see your patients.' + error.message,
          message: messages.patientIndexFailure,
          variant: 'danger'
        })
      })
  }

  render () {
  // const { name, quantity, price } = this.state
    const patients = this.state.patients.map(patient => (
      <tr key={patient._id}>
        <td><Link to={`/patients/${patient._id}`}>{patient.lastName}</Link></td>
        <td><Link to={`/patients/${patient._id}`}>{patient.firstName}</Link></td>
        <td><Link to={`/patients/${patient._id}`}>{patient.middleName}</Link></td>
        <td><Link to={`/patients/${patient._id}`}>{patient.dob}</Link></td>
        <td><Link to={`/patients/${patient._id}`}>{patient.gender}</Link></td>
      </tr>
    ))
    return (
      <Layout>
        <Link to='/add-patient'>
          <img src={add} className="add-patient"/>
        </Link>
        <MDBTable responsive hover size="sm">
          <MDBTableHead className="thead">
            <tr>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Middle Initial/Name</th>
              <th>DOB</th>
              <th>Gender</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {patients}
          </MDBTableBody>
        </MDBTable>
      </Layout>
    )
  }
}

export default withRouter(Patients)
