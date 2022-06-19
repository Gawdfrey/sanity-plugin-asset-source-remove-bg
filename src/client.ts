/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios'
import {AccountResponse, RemoveBgPayload, RemoveBgResponse} from './types'

const axiosClient = axios.create({
  baseURL: 'https://api.remove.bg/v1.0',
})

export function fetchCreditBalance(apiKey: string): Promise<AccountResponse> {
  return axiosClient
    .get('/account', {
      headers: {
        'X-API-Key': apiKey,
      },
    })
    .then((response) => response.data.data.attributes)
    .catch((error) => error.response.data)
}

export function removeBackground(
  apiKey: string,
  payload: RemoveBgPayload
): Promise<RemoveBgResponse> {
  return axiosClient
    .post('/removebg', payload, {
      headers: {
        'X-API-Key': apiKey,
        Accept: 'application/json',
      },
    })
    .then((response) => response.data)
    .catch((error) => error.response)
}
