import React from 'react'
import { Link } from 'gatsby'

const Index = () => {
  return (
    <>
      <h1>Events</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/app/dashboard">Dashboard</Link>
        <Link to="/app/account">Account</Link>
      </nav>
    </>
  )
}

export default Index
