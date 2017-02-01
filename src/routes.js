import React from 'react'
import {Route, Redirect, IndexRoute} from 'react-router'
import Main from './templates/Main.js'
import Home from './templates/Home.js'
import Style from './templates/Style.js'
import Faq from './templates/Faq.js'

module.exports = (      
    <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Route path="Style" component={Style} />
        <Route path="Faq" component={Faq} />
    </Route>
)


