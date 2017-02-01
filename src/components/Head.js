import React from 'react'
class Head extends React.Component {
    render() {
        return (
            <head>
              <title>{this.props.title}</title>
              <link rel="stylesheet" href="styles.css" />
              <link href="https://fonts.googleapis.com/css?family=Lato|Source+Sans+Pro" rel="stylesheet" />
            </head>
        )
    }
}

export default Head