import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:8800',
})

export const createSession = async (username, password) => {
    return api.post('/signin', {username, password})
}