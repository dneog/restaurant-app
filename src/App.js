
import './App.css';
import Header from './Layout/Header';
import Meals from './Meals/Meals';
function App() {
  return (
    <div className="App">
     <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
