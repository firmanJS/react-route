import React, { Component } from 'react';
import RouteHeader from './RouteHeader';
import Konten from './components/Konten';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouteHeader />
        <Konten />
        <Footer />
      </div>
    );
  }
}

export default App;
