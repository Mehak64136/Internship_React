import React from 'react'
import { useContext } from 'react'
import Usercontext from './Usercontext'

const Profile = () => {
    const user = useContext(Usercontext)
  return (
    <div>Profile name is {user}</div>
  )
}

export default Profile