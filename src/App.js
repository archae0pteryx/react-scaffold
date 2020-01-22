import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Router, Link } from '@reach/router'
import Page from './Page'
import ThemeContext from './ThemeContext'

function App() {
  const themeHook = useState('peru')
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">A link</Link>
          </header>
          <Router>
            <Page path="/" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
