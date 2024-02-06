import apiClient from '../utils/api-client'
import {jwtDecode} from 'jwt-decode'

const tokenName = "token"

export async function signup(user, profile) {
  const body = new FormData()
  body.append("name", user.name)
  body.append("email", user.email)
  body.append("password", user.password)
  body.append("deliveryAddress", user.deliveryAddress)
  body.append("profilePic", profile)

  const {data} = await apiClient.post("/user/signup", body)
  localStorage.setItem(tokenName, data.token)
}

export async function userLogin(user) {
  const {data} = await apiClient.post("/user/login", user)
  localStorage.setItem(tokenName, data.token)
}

export function userLogout() {
  localStorage.removeItem(tokenName)
}

export function getUser() {
  const jwt = localStorage.getItem(tokenName);
  try {
    return jwtDecode(jwt)
  } catch (error) {
    null    
  }
}

export function getJwt() {
  return localStorage.getItem(tokenName);
}