import React from 'react'
import Head from '../components/Head'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import general from './general.css'

export default class Main extends React.Component {
  render() {
    return (
      <html>
        <Head title='React and CSS Modules'/>
        <body className={general.body}>
          <Nav />
          <div>
            {this.props.children}
          </div>
          <Footer />
        </body>
      </html>
    )
  }
}