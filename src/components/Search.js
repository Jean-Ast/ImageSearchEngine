import React, { Component } from 'react';


class Search extends Component {

    // Las ref nos permiten leer los valores de los inputs
    searchRef = React.createRef();

    obtenerDatos = ( e )=> 
    {
        e.preventDefault();

        // Tomamos el valor del input
        const datoABuscar = this.searchRef.current.value;

        // Enviamos el valor del input al componente principal
        this.props.datoABuscar( datoABuscar );
    }

    
    render() { 
        return (  
            <form onSubmit = { this.obtenerDatos }>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={ this.searchRef } type="text" className="form-control form-control-lg" 
                        placeholder="Busca tu imagen. Ejemplo: Cafe" />
                    </div>
                    <div className="form-group col-md-2">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value ="Buscar...." />
                    </div>
                </div>
            </form>
        );
    }
}
 
export default Search;