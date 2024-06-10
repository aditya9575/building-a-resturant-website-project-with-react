import React, { useState } from 'react'
import HeaderComponent from './components/Layout/HeaderComponent'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'

const App = () => {

const [cartIsShown , setCartIsShown] = useState(false);

const showCartHandler = () => {
  setCartIsShown(true);
}

const hideCartHandler = () =>{
  setCartIsShown(false)
}

  return (
    <CartProvider>
    {cartIsShown && <Cart onCartCloseButtonPress={hideCartHandler}/>}

      <HeaderComponent onCartButtonPress={showCartHandler}/>
    
      <main>
        <Meals/>
      </main>
    </CartProvider>
  )
}

export default App