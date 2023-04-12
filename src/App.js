
import './App.css';
import BigBanner from './components/BigBanner';
import EventCard from './components/EventCard';
import NewsComponent from './components/NewsComponent';
import StickyHeader from './components/StickyHeader';
import TopHeader from './components/TopHeader';
import { ReactComponent as Autarquia} from './resources/autarquia360.svg';

function App() {
  return (
    
    <div className="App">
      <TopHeader></TopHeader>
      <StickyHeader />
      <BigBanner />
      <NewsComponent />
      <Autarquia className='autarquia-logo'/>
      <div className="banner">
        {/* <h1>O DESAFIO VISUALFORMA</h1> */}
      </div>
    </div>
    

  );
}

export default App;
