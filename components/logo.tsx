import React from 'react'

const Logo = () => {
  return (
    <div className='flex gap-1'>
      <img src="/images/logo.svg" alt="logo" height="60px" width="60px"/>
      <h1 className='text-2xl text-gray-700 font-bold'>Taskybot</h1>
    </div>
  )
}

export default Logo
