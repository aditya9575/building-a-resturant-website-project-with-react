import React from 'react'
import HeaderComponent from './components/Layout/HeaderComponent'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'

const App = () => {
  return (
    <div>
    <Cart/>
      <HeaderComponent/>
      <main>
        <Meals/>
      </main>
    </div>
  )
}

export default App