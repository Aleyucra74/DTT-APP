import axios from 'axios';

const api = axios.create({
    baseURL: "http://d91f-34-125-217-90.ngrok.io/"
})

export default api;