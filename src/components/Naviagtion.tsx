import React from 'react'
import { Link } from 'react-router-dom'

const Naviagtion = () => {
	const userName = 'daniel-johannesson'
  return (
	<nav>
		<Link to='/'>Home</Link>
		<Link to={`/${userName}/home`}>User Page</Link>
	</nav>
  )
}

export default Naviagtion