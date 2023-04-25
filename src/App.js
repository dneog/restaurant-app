
import './App.css';
import Cart from './Cart/Cart';
import Header from './Layout/Header';
import Meals from './Meals/Meals';
function App() {
  return (
    <div className="App">
    <Cart />
     <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
