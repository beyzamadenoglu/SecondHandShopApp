import React from 'react'
import { useSelector } from 'react-redux';

const Account = () => {
    const { user } = useSelector(state => state);
    console.log(user?.user?.token);

  return (
    <div>{user?.user?.mail}</div>

  )
}

export default Account;