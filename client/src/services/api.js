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
export const postSendFriendRequest = async (friendId, userId) => {
    return await api.post(`/api/redesocial/solicitacoes/${encodeURIComponent(friendId)}`, {idusuario: userId})
}

export const deleteRemoveFriendRequest = async (friendId, userId) => {
    return await api.delete(`/api/redesocial/solicitacoes/${encodeURIComponent(friendId)}`, {data: {idusuario: userId}})
}

export const postAcceptFriendRequest = async (friendId, userId) => {
    return await api.post(`/api/redesocial/amigos/${encodeURIComponent(friendId)}`, {idusuario: userId})
}

export const deleteRemoveFriend = async (friendId, userId) => { 
    return await api.delete(`/api/redesocial/amigos/${encodeURIComponent(friendId)}`, {data: {idusuario: userId}})
}

export const getNetworkData = async (userId) => {
    return await api.get(`/api/redesocial/rede/${encodeURIComponent(userId)}`)
}

//posts
export const postCreatePost = async (userId, postContent, name, isNgo) => {
    return await api.post(`/api/posts/`, {idusuario: userId, post_content: postContent, name: name, isngo: isNgo})
}

export const getPost = async (postId) => {
    return await api.get(`/api/posts/${encodeURIComponent(postId)}`)
}

export const getUserPosts = async (userId) => {
    return await api.get(`/api/posts/usuario/${encodeURIComponent(userId)}`)
}

export const getTimeline = async (userId) => {
    return await api.get(`/api/posts/timeline/${encodeURIComponent(userId)}`)
}

//commentaries
export const postCommentary = async (userId, commentaryContent, name, isNgo, postId) => {
    return await api.post(`/api/comentarios/`, {idusuario: userId, commentary_content: commentaryContent, name: name, isngo: isNgo, idpost: postId})
}

export const getPostCommentaries = async (postId) => {
    return await api.get(`/api/comentarios/${encodeURIComponent(postId)}`)
}

//chat: /api/conversas

export const postChat = async (userId, friendId) => {
    return await api.post(`/api/conversas/`, {idEmissor: userId, idReceptor: friendId})
}

export const getUserChats = async (userId) => {
    return await api.get(`/api/conversas/${userId}`)
}

export const getChat = async (firstUserId, secondUserId) => {
    return await api.get(`/api/conversas/find/${firstUserId}/${secondUserId}`)
}

//messages: /api/mensagens
export const postMessage = async (userId, messageText, chatId) => {
    return await api.post(`/api/mensagens/`, {idConversa: chatId, emissor: userId, texto: messageText})
}

export const getMessages = async (chatId) => {
    return await api.get(`/api/mensagens/${chatId}`)
}
