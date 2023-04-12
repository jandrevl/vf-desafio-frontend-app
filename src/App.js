
import './App.css';
import BigBanner from './components/BigBanner';
import EventsComponent from './components/EventsComponent';
import NewsComponent from './components/NewsComponent';
import StickyHeader from './components/StickyHeader';
import TopHeader from './components/TopHeader';

function App() {
  return (
    
    <div className="App">
      <TopHeader></TopHeader>
      <StickyHeader />
      <BigBanner />
      <NewsComponent />
      <EventsComponent />
      
      <div className="banner">
        {/* <h1>O DESAFIO VISUALFORMA</h1> */}
      </div>
    </div>
    

  );
}

export default App;
