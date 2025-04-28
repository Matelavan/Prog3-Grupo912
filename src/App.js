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
//Se importan todos los compenentes y screens

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
        <Route path={'/resultBusqueda/:busqueda'} component={ResultBusqueda} />
        <Route path={''} component={NotFound} />
      </Switch>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
//<BrowserRouter>: Este es el contenedor principal que activa el enrutamiento. Todo lo que está dentro de él tendrá acceso al sistema de rutas.
//<Header />: El componente del encabezado se muestra en todas las páginas, ya que está fuera del Switch.
//<Switch>: Dentro de Switch, cada <Route> se configura con una ruta específica:
//   /moviedetalle/:id: Muestra los detalles de una película específica, pasando el ID como parámetro.
//   /: La ruta raíz, que muestra la página principal (Home).
//   /verTodas/populares: Muestra las películas populares.
//   /verTodas/cartelera: Muestra las películas en cartelera.
//   /favoritos: Muestra las películas favoritas.
//  /resultBusqueda/:busqueda: Muestra los resultados de búsqueda basados en el término ingresado por el usuario.
//   Ruta por defecto (NotFound): Si no coincide ninguna de las rutas anteriores, se muestra una página de error 404.
// <Footer />: El pie de página se muestra después del contenido, independientemente de la ruta.



