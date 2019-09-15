import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Post 4 Every1</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
