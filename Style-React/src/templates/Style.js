import React from 'react'

export default class Style extends React.Component {
  render() {
    return (
        <div>
          <h2>STYLE, STYLE, STYLE</h2>
            <blockquote>Although there are different ways to get there, a thoughtful understanding of CSS is a prerequisite for continued success in building great things for the web.<small> — LYZA DANGER GARDNER </small></blockquote>
          <ul>
            <li>
               <h3><a href="https://css-tricks.com/" target="_blank">CSS</a></h3>
               <p>Think you know CSS? Think again. If you aren't learning, you aren't growing.</p>
             </li>
             <li>
               <h3><a href="http://sass-lang.com/" target="_blank">Sass</a></h3>
               <p>Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.</p>
             </li>
            <li>
               <h3><a href="https://www.kirupa.com/react/styling_in_react.htm">Inline Styles</a></h3>
               <p>Sadly, there is not a lot of good documentation and best practices out there for this. This resource will give you s tast of how some people are using this method to style in React.</p>
             </li>
            <li>
               <h3><a href="https://github.com/css-modules/css-modules">CSS Modules</a></h3>
               <p>A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. All URLs (url(...)) and @imports are in module request format (./xxx and ../xxx means relative, xxx and xxx/yyy means in modules folder, i. e. in node_modules).</p>
             </li>
          </ul>
        </div>
    )
  }
}