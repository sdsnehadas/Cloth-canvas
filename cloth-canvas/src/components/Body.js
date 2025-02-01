import React from 'react'
import { Outlet } from 'react-router-dom';
const Body = () => {
  return (
    <div className="flex w-full">
    <Outlet></Outlet>
    </div>  )
}

export default Body