import React from 'react'
import Sidebar from './SideBar'
import { Outlet } from 'react-router'

function ShopLayout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default ShopLayout
