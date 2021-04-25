import React from 'react'
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="menu">
      <Link to="/">Главная</Link>
      <Link to={{
        pathname: "/about",
        state: {
          fromLocation: true,
        },
      }}>О проекте</Link>
    </div>
  )
}

export default Navigation;
