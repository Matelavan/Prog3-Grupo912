import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MovieDetalle from './screens/MovieDetalle';
import Home from './screens/Home';
import verTodas from './screens/VerTodas';
import Favoritos from './screens/Favoritos';
import FiltroPelis from "./components/FiltroPelis/FiltroPelis";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <FiltroPelis />
      
      <Switch>
        <Route path={'/moviedetalle/:id'} component={MovieDetalle} />
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/verTodas'} component={verTodas} />
        <Route path={'/favoritos'} component={Favoritos} />
      </Switch>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
