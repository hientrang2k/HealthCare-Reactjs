import axios from '../axios';

const handleLogin = (email, password) => {
    return axios.post('/api/login', { email, password })
}

const getAllUser = () => {
    return axios.get('/api/getAllUser')
}

const getUserById = (id) => {
    return axios.get(`/api/getUserById?id=${id}`)
}

export {
    handleLogin,
    getAllUser,
    getUserById
}