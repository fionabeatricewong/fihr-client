import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { index } from '../../api/patient'
import messages from '../AutoDismissAlert/messages'
import Layout from '../../components/Layout'
import add from '../../add_button.png'

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
        <td><Link to={`/patients/${patient._id}`}>{patient.name}</Link></td>
      </tr>
    ))
    return (
      <Layout>
        <Link to='/patients/add-patient'>
          <img src={add} className="add-patient"/>
        </Link>
        <table>
          <tbody>
            {patients}
          </tbody>
        </table>
      </Layout>
    )
  }
}

export default withRouter(Patients)
