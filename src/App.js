import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import Body from './components/Body';
import Footer1 from './components/Footer1';
import Footer2 from './components/Footer2';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Navbar/>
      <Banner/>
      <Body/>
      <Footer1/>
      <Footer2/>
      </BrowserRouter>
    </>
  );
}

export default App;
