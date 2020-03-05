import axios from "axios";

let baseURL = 'https://help-services.herokuapp.com'
 process.env.NODE_ENV === 'production'
   ? (baseURL = 'https://help-services.herokuapp.com')
  : (baseURL = 'http://localhost:3000');

const favoritesService = axios.create({
    withCredentials: true, baseURL
})

export const getAllFavorites = async () => {
  const { data } = await favoritesService.get();
  return data;
}
export const getFavorite = async favoritetId => {
  const { data } = await favoritesService.get(`/${favoriteId}`);
  return data;
}
export const createFavorite = async (name, description) => {
  const { data } = await favoritesService.post("/", { name, description });
  return data;
}
export const updateFavorite = async (id, name, description) => {
  const { data } = await favoritesService.put(`/${id}`, { name, description });
  return data;
}
export const deleteFavorite = async id => {
  const { data } = await favoritesService.delete(`/${id}`);
  return data;
}