
import Header from './components/Header';
import PainelMain from './components/PainelMain'
// import Carrosel from './components/CarroselPhotos/Carrosel'
import AvalibleCars from './components/AvaliableCars/AvalibleCars'
import Contact from './components/Contact'
import Footer from './components/Footer'

import CoverCarrosel from './components/cover'


import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <PainelMain />
      <hr />
      <AvalibleCars />
      <hr />
      <CoverCarrosel />
      <hr />
      <Contact />
      <Footer />



    </div>

  );
}

export default App;
