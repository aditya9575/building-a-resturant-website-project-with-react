import React from 'react'
import HeaderComponent from './components/Layout/HeaderComponent'
import Meals from './components/Meals/Meals'

const App = () => {
  return (
    <div>
      <HeaderComponent/>
      <main>
        <Meals/>
      </main>
    </div>
  )
}

export default App