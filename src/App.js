import React, { Component } from 'react';
import './nuevo.css';
import Search from './components/Search';
import Resultado from './components/Resultado';

class App extends Component {

  state = {
    dato : '',
    imagenes : []
  }

  datoABuscar = ( dato ) =>{
    this.setState({
      dato
    }, ()=>{
      this.consultarAPI();
    })
  }

  consultarAPI = () =>{
    const miApi = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${this.state.dato}&per_page=20`;

    fetch( miApi )
      .then( response => response.json() )
      .then( response => this.setState( { imagenes : response.hits } ) )
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <div className="app container">
          <div className="jumbotron">
            <h1>Buscador de imágenes</h1>
            <Search
            datoABuscar = { this.datoABuscar }
            />
          </div>
          <Resultado
            images = { this.state.imagenes }
          />
        </div>
      </header> 
    </div>
  );
}
}
 
export default App;

