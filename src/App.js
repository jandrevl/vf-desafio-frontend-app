
import './App.css';
import BigBanner from './components/BigBanner';
import EventsComponent from './components/EventsComponent';
import FinalInformation from './components/FinalInformation';
import Location from './components/Location';
import NewsComponent from './components/NewsComponent';
import OfficialDocs from './components/OfficialDocs';
import PhotoAlbum from './components/PhotoAlbum';
import StickyHeader from './components/StickyHeader';
import TopHeader from './components/TopHeader';
import UsefulLinks from './components/UsefulLinks';
import Footer from './components/Footer';

function App() {
  return (
    
    <div className="App">
      <TopHeader></TopHeader>
      <StickyHeader />
      <BigBanner />
      <NewsComponent />
      <EventsComponent />
      <PhotoAlbum />
      <OfficialDocs />
      <UsefulLinks />
      <Location />
      <FinalInformation />
      <Footer />
      
      
      <div className="banner">

      </div>
    </div>
    

  );
}

export default App;
