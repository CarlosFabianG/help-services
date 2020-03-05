import axios from 'axios';
let baseURL = 'https://help-services.herokuapp.com'
 process.env.NODE_ENV === 'production'
   ? (baseURL = 'https://help-services.herokuapp.com')
  : (baseURL = 'http://localhost:3000');

//REVISAR MENSAJE
//const baseURL = 'http://localhost:3000'

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
  },
  CREATE: async form => {
    console.log(form)
    const { data } = await service.post('/profile/create', form)
    return data
  },

  uploadPhoto: async photo => {
    return await service.post('upload', photo)
  },

  getAllMyBusiness: async () => {
     const { data } = await service.get('/profile/myBusiness')
     return data
  }
}
export default AUTH_SERVICE