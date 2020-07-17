import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Scrollbars from 'react-custom-scrollbars';

function App() {
  return (
    <div>
      <Scrollbars autoHeight autoHeightMin={`calc(100vh)`} autoHide={true}>
      <Navigation />
      <Footer />
      </Scrollbars>
    </div>
  );
}

export default App;
