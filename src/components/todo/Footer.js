import React from 'react';
import {Link} from '../router/Link'

const Footer = () => {
  return (
    <div>
      <span className="footer"><Link to='/'>All</Link></span>
      <span className="footer"><Link to='/active'>Active</Link></span>
      <span className="footer"><Link to='/complete'>Complete</Link></span>
    </div>
  )
}

export default Footer;
