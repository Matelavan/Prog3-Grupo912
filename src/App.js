import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MovieDetalle from './screens/MovieDetalle';
import Home from './screens/Home/Home';
import verTodas from './screens/VerTodas';
import Favoritos from './screens/Favoritos';
import NotFound from "./screens/NotFound/NotFound";
import ResultBusqueda from "./screens/ResultBusqueda/ResultBusqueda";
import verTodasCartelera from './screens/VerTodasCartelera';


function App() {
  return (
    <BrowserRouter>
      <Header />
      
      
      <Switch>
        <Route path={'/moviedetalle/:id'} component={MovieDetalle} />
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/verTodas/populares'} component={verTodas} />
        <Route path={'/verTodas/cartelera'} component={verTodasCartelera} />
        <Route path={'/favoritos'} component={Favoritos} />
        <Route path={''} component={NotFound} />
        <Route path={'/resultados/:busqueda'} component={ResultBusqueda} />
      </Switch>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
