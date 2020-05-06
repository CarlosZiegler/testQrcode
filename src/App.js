import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react'
import axios from 'axios'
import './App.css';




function App() {

  async function getData() {
    const response = await axios.get('https://carlosziegler.now.sh/api/qrcode')
    return setLinks(response.data.link)
  }

  const [links, setLinks] = useState([])

  useEffect(() => {
    getData()
  }, [])


  if (links.length > 0) {

    return (
      <div className="App">
        {links.map(link => <div className="container">
          <QRCode size={300} className="Qrcode" value="https://github.com/carlosziegler" />
          <p>{link}</p>
        </div>)}
      </div>
    );
  }
  return (
    <div className="App">

    </div>
  );
}

export default App;
