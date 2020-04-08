import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.spoonacular.com/',
    method: "GET",
})

export default api;