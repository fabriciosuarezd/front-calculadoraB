import React from 'react'
import Header from './components/Header'
import { GlobalProvider } from './context/GlobalState'

const App = () => {
  return (
    <GlobalProvider>
      <Header />
    </GlobalProvider>
    
  )
}

export default App