import React from 'react';
import './App.css';
import RoutesTree from './Components/RoutesTree';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <RoutesTree />
      <Footer />
    </div>
  );
}

export default App;
