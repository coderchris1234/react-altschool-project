import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <p>HOME</p>
      <nav>
        <ul>
            <li>
          <Link to='/accounts'>Accounts</Link>
          </li>
          
          <li>
          <Link to='/User'>User</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Home
