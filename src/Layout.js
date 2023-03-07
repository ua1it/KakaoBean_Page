import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to ="/">Home</Link>
          </li>
          <li>
            <Link to ="/vision">Vision</Link>
          </li>
          <li>
            <Link to ="/team">Team</Link>
          </li>
          <li>
            <Link to ="/custom">Custom</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </>
  )
}
