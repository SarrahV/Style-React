import React from 'react'

export default class Home extends React.Component {
  render() {
    return (
        <div  className="home-content">
          <div className="home-section">
             <h2>I WANT TO STYLE THIS REACT APP</h2>
             <h3>But...I want to keep my friends</h3>
             <p>Don't worry! Contrary to what you have heard, there are actually many ways to style in React. The most important thing to remember is to pick the best tools for the job. A simple app like this could do with plain old css or a bit of Sass if you are feeling fancy. Bigger, more complicated apps require more planning and architecture to ensure style stays consistent across many components.</p>
             <p>Maybe most importantly of all, learn CSS. Really learn it. CSS is deceptively easy to pick up leaving many feeling overconfident in their skills. I challenge you to try something new in CSS everyday. If you aren't learning, you aren't growing.</p>
            </div>
             <div className="home-video">
                <iframe src="//giphy.com/embed/13rAwTdz7Jzo2c?html5=true" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
             </div>
        </div>
    )
  }
}

