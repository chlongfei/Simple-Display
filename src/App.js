import './App.css';
import FileUpload from './components/fileUpload/fileUpload';

import React, {useState} from 'react';
import {io} from 'socket.io-client';

function App() {

  const [mode, setMode] = useState(0);

  switch(mode){
    case 0: return <FileUpload/>
    default: return <div>ERROR!</div>
  }
}

export default App;
