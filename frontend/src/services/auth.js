import axios from 'axios';
// let baseURL;
// process.env.NODE_ENV === 'production'
//   ? (baseURL = 'here should be your production endpoint')
//   : (baseURL = 'http://localhost:3000');

//REVISAR MENSAJE
const baseURL = 'http://localhost:3000'

const service = axios.create({ withCredentials: true, baseURL });

const AUTH_SERVICE = {
  SIGNUP: async form => {
    const { data } = await service.post('/signup', form)
    return data
  },
  LOGIN: async form => {
    const { data } = await service.post('/login', form)
    return data
  },
  LOGOUT: async () => {
    const { data } = await service.get('/logout')
    return data
  }
}
export default AUTH_SERVICE