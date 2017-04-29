import React from 'react'

export default class Faq extends React.Component {
  render() {
    return (
         <div>
          <h2>GOT QUESTIONS?</h2>
          <h3>We've got answers.</h3>
          <p>React can be intimidating when you first start. Learning some of the technologies and terms most closely associated with React can help things make a little more sense.</p>
          <ul>
            <li>
               <h3><a href="https://webpack.js.org/" target="_blank">Webpack</a></h3>
               <p>A module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.</p>
             </li>
             <li>
               <h3><a href="https://webpack.github.io/docs/using-loaders.html" target="_blank">Loaders</a></h3>
               <p>Loaders are transformations that are applied on a resource file of your app. They are functions (running in node.js) that take the source of a resource file as the parameter and return the new source.</p>
             </li>
            <li>
               <h3><a href="https://babeljs.io/">Babel</a></h3>
               <p>Babel has support for the latest version of JavaScript through syntax transformers. Babel can also convert JSX syntax and strip out type annotations.</p>
	 	 	
<p>It works via transpiling (much like preprocessing) to convert the code into an earlier version of JavaScript that has greater browser support. This is similar to how Sass works; initially writing your code in Sass syntax, and then a preprocessor compiles to standard CSS.</p>
             </li>
            <li>
               <h3><a href="http://buildwithreact.com/tutorial/jsx">JSX</a></h3>
               <p>Babel has support for the latest version of JavaScript through syntax transformers. Babel can also convert JSX syntax and strip out type annotations.</p>
             </li>
          </ul>
        </div>
    )
  }
}