import React from 'react'
import { useState, useEffect } from 'react'

import Header from '../components/Header'
import Notification from '../components/Notification'

import { getNetworkData } from '../services/api'

import '../css/pages/NotificationPage.css'

const jwt = require('jsonwebtoken');

const NotificationPage = () => {
    const decodedToken = jwt.decode(JSON.parse(localStorage.getItem('user')).token)

    const [requests, setRequests] = useState([])

    useEffect(() => {
        getNetworkData(decodedToken.userId).then((n) => {setRequests(n.data.solicitacoes_recebidas)})
    }, [])

    const handleResolveRequest = () => {
        getNetworkData(decodedToken.userId).then((n) => {setRequests(n.data.solicitacoes_recebidas)})
    }

    return(<>
        <Header></Header>
        <div className='notification-area-container'>
        {requests.length == 0 ? <div className='notification-message'>There are no notifications</div> : requests.map((id) => 
            <Notification userId = {decodedToken.userId} requestId = {id} updateFunction = {handleResolveRequest}></Notification>
        )}
        </div>
    </>)
}

export default NotificationPage