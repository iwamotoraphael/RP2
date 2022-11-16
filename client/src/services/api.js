import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:8800',
})

//auth
export const postLogin = async (username, password) => {
    return await api.post('/api/auth/signin', {username, password})
}

export const postPersonSignup = async (username, displayName, password, originCountry, languages) => {
    return await api.post('/api/auth/signup-geral', {username, displayName, password, originCountry, languages})
}

export const postNgoSignup = async (username, displayName, password, languages, email, address) => {
    return await api.post('/api/auth/signup-ngo', {username, displayName, password, email, address, languages})
}

//users
export const patchProfile = async (id, data, token) => {
    return await api.patch(`/api/usuarios/atualizar-perfil/${encodeURIComponent(id)}`, data, {headers: {'x-access-token': token}})
}

export const getUser = async (id) => {
    return await api.get(`/api/usuarios/find/${encodeURIComponent(id)}`)
}

export const getAllNgos = async () => {
    return await api.get(`/api/usuarios/ngos`)
}

export const getAllPersons = async () => {
    return await api.get(`/api/usuarios/persons`)
}

export const getSearchNgos = async (name, languages) => {
    let url = '/api/usuarios/ngo/'

    name=="" ? url += '%7F/' : url += encodeURIComponent(name)+'/'

    return await api.get(url+encodeURIComponent(JSON.stringify(languages)))
}

export const getSearchPersons = async (name, originCountry, languages) => {
    let url = '/api/usuarios/person/'

    name=="" ? url += '%7F/' : url += encodeURIComponent(name)+'/'

    originCountry=="" ? url += '%7F/' : url += encodeURIComponent(originCountry)+'/'

    return await api.get(url+encodeURIComponent(JSON.stringify(languages)))
}

//network

//chat