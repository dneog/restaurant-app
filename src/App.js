
import { useState } from 'react';
import './App.css';
import Cart from './Cart/Cart';
import Header from './Layout/Header';
import Meals from './Meals/Meals';
function App() {

  const [CartIsShown, setCartIsShown]= useState(false);

  const showCartHandler=()=> {
    setCartIsShown(true)
  }
  const hideCartHandler=()=> {
    setCartIsShown(false)
  }
  return (
    <div className="App">
    {CartIsShown && <Cart onClose={hideCartHandler} />}
     <Header onShowCart = {showCartHandler} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
