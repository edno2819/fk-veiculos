
import Header from './components/Header';
import PainelMain from './components/PainelMain'
import AvalibleCars from './components/AvaliableCars/AvalibleCars'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CoverCarrosel from './components/cover'

import ContactContext from './contexts/ContactContext'
import CarContext from './contexts/CarContext'


import './App.scss';

function App() {
  return (
    <div className="App">
      <ContactContext>
        <Header />
        <PainelMain />
        <hr />
        <CarContext>
          <AvalibleCars />
        </CarContext>
        <hr />
        <CoverCarrosel />
        <hr />
        <Contact />
        <Footer />
      </ContactContext>
    </div>

  );
}

export default App;
