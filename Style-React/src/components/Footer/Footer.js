import React from 'react'
import footer from './styles.css'


export default class Footer extends React.Component {
  render() {
      return (
        <div>
            <div className={footer.container}>
               <a className={footer.link} href="https://www.linkedin.com/in/sarrahvesselov">
                  <img className={footer.icon} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/229861/twitter.svg" 
                    alt="twitter"/>
               </a>
               <a className={footer.link} href="https://twitter.com/SVesselov">
                  <img className={footer.icon} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/229861/linkedin.svg" 
                    alt="linkedin"/>
                </a>
            </div>
            <small>&#9400; Sarrah Vesselov - not really, fork this repo and have fun!</small>
        </div>
      )
    }
}
