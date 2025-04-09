import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MovieDetalle from './screens/MovieDetalle';
import Home from './screens/Home';


function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Switch>
        <Route path='/moviedetalle/:id' component={MovieDetalle} />
        <Route path='/' component={Home} />
      </Switch>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
