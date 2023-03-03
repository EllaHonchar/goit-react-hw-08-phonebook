import axios from 'axios';

const publicHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const privateHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export async function registerRequest(credential) {
  const { data } = await publicHost.post('/users/signup', credential);
  return data;
}

export async function loginRequest(credential) {
  const { data } = await publicHost.post('/users/login', credential);
  return data;
}

export async function logoutRequest() {
  const { data } = await privateHost.post('/users/logout');
  return data;
}

export async function getUserData() {
  const { data } = await privateHost.get('/users/current');
  return data;
}

export const token = {
  set: token => {
    privateHost.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet: () => {
    privateHost.defaults.headers.common.Authorization = '';
  },
};
