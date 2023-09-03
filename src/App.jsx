import React, { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './Admin'
import User from './User'
import Guest from './Guest'
import { GlobalContext } from './Context/context'
import {decodeToken} from 'react-jwt'

const ComponentByRoles = {
  'admin': Admin,
  'guest': Guest,
  'user': User,
}

const getUserRole = (params) => ComponentByRoles[params] || ComponentByRoles['guest']
const getDecodeToken= (token)=> decodeToken(token) || null

export default function App() {
  
const { state, dispatch } = useContext(GlobalContext)
const currentToken =getDecodeToken(state.token)
  const CurrentUser = getUserRole(currentToken.role)
  return <CurrentUser />
}
