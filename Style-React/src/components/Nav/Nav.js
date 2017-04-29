import React from 'react'
import nav from './styles.css'
import {IndexLink} from 'react-router'

var Router = require('react-router');
var Link = Router.Link;


export default class Nav extends React.Component {
  render() {
      return (
        <nav className={nav.container}>
           <div>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/229861/react.svg" 
                   height="50px" width="50px" className={nav.logo} />
           </div>
           <ul className={nav.list}>
             <li className={nav.item}>
                <IndexLink to="/" className={nav.link} activeClassName={nav.active}>Home</IndexLink>
             </li>
             <li className={nav.item}>
                <Link to="/Style" className={nav.link} activeClassName={nav.active}>Style</Link>
             </li>
             <li className={nav.item}>
                <Link to="/Faq" className={nav.link} activeClassName={nav.active}>FAQ</Link>
             </li>
           </ul>
         </nav>
      )
    }
}
