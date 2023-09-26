import React from 'react'
import ReactDOM from 'react-dom/client'
// import {Home} from './pages/Home/index.jsx'
import {ThemeProvider} from 'styled-components'
import theme from './styles/theme.js'
import GlobalStyles from './styles/global.js'
import {SignIn} from './pages/SignIn'
import {SignUp} from './pages/SignUp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <SignUp />
    </ThemeProvider>
  </React.StrictMode>,
)
