import React from 'react';
import './resources/styles.css';

import Header from './component/header-footer/header';
import Featured from './component/featured/index'

function App() {
  return (
    <div className="App" style={{height:'1500px', background:'black'}}>
      <Header/>
      <Featured/>
    </div>
  );
}

export default App;
