import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:8800',
})

export const postLogin = async (username, password) => {
    return await api.post('/signin', {username, password})
}

export const postPersonSignup = async (username, displayName, password, originCountry, languages) => {
    return await api.post('/signup-geral', {username, displayName, password, originCountry, languages})
}

export const postNgoSignup = async (username, displayName, password, originCountry, languages) => {
    return await api.post('/signup-ngo', {username, displayName, password, originCountry, email, address, languages})
}