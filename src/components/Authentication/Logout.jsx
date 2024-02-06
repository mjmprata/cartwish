import React, { useEffect }  from 'react'
import { userLogout } from '../../services/userServices'

const Logout = () => {
  useEffect(()=> {
    // localStorage.removeItem("token")
    userLogout();
    window.location = "/"
  }, [])
  return null
}

export default Logout