
import './App.css';
import StickyHeader from './components/StickyHeader';
import TopHeader from './components/TopHeader';

function App() {
  return (
    
    <div className="App">
      <TopHeader></TopHeader>
      <StickyHeader />
      <div className="banner">
        {/* <h1>O DESAFIO VISUALFORMA</h1> */}
      </div>
    </div>
    

  );
}

export default App;
