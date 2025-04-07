import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MovieDetalle from './screens/MovieDetalle';


function App() {

  return (
  
  <BrowserRouter>
    
    <Switch>
    <Header></Header>
    <Route path={'/moviedetalle'} component ={MovieDetalle}/>
    <Footer></Footer>
    
  </Switch>
  
  </BrowserRouter>
   
     
      
       
      
  
  );
}

export default App;
