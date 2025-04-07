import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MovieDetalle from './screens/MovieDetalle';

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Switch>
        <Route path='/moviedetalle/:id' component={MovieDetalle} />
       
      </Switch>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
