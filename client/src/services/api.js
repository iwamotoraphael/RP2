import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:8800',
})

export const postLogin = async (username, password) => {
    return await api.post('/api/auth/signin', {username, password})
}

export const postPersonSignup = async (username, displayName, password, originCountry, languages) => {
    return await api.post('/api/auth/signup-geral', {username, displayName, password, originCountry, languages})
}

export const postNgoSignup = async (username, displayName, password, originCountry, languages, email, address) => {
    return await api.post('/api/auth/signup-ngo', {username, displayName, password, originCountry, email, address, languages})
}

export const patchProfile = async (id, data) => {
    return await api.patch(`/api/usuarios/atualizar-perfil/${id}`, data)
}

export const getUser = async (id) => {
    return await api.get(`/api/usuarios/find/${id}`)
}