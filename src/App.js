
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Igra from './components/Igra';
import Kreiraj from './components/Kreiraj';
import Navbar from './components/Navbar';

function App() {
  const [reci, setreci] = useState([])

  const kreiraj = (rec) => {

    setreci(prev => {
      return [...prev, rec]
    })
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>


        <Route path='/kreiraj'>
          <Kreiraj kreiraj={kreiraj} />
        </Route>
        <Route path='/'>

          <Igra reci={reci} />
        </Route>
      </Switch>


    </BrowserRouter>
  );
}

export default App;
