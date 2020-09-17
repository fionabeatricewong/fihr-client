import apiUrl from '../apiConfig'
import axios from 'axios'

export const index = (patient, user) => {
  return axios({
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    url: apiUrl + '/patients/',
    method: 'GET',
    data: {
      patient: {
        firstName: patient.firstName,
        middleName: patient.middleName,
        lastName: patient.lastName,
        dob: patient.dob,
        gender: patient.gender,
        phone: patient.phone,
        email: patient.email
      }
    }
  })
}

export const patientCreate = (patient, user) => {
  return axios({
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    url: apiUrl + '/patients',
    method: 'POST',
    data: {
      patient: {
        firstName: patient.firstName,
        middleName: patient.middleName,
        lastName: patient.lastName,
        dob: patient.dob,
        gender: patient.gender,
        phone: patient.phone,
        email: patient.email
      }
    }
  })
}

export const show = (id, user) => {
  return axios({
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    url: apiUrl + '/patients/' + id,
    method: 'GET'
  })
}
