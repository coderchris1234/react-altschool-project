import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Accounts = () => {
  return (
    <div>
        <p>Accounts</p>
      <nav>
        <ul>
            <li>
          <Link to='fixed'>Fixed</Link>
          </li>

          <li>
          <Link to='Current'>Current</Link>
          </li>
          </ul>
      </nav>
      <Outlet />
      
    </div>
  )
}

export default Accounts
