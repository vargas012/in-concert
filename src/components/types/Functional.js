import React, {useState, useEffect} from 'react';
import logo from '../../logo.svg';

const FunctionalComponent = ({lorem, lorem2}) => {
    const [initialValue, setInitialValue ] = useState('blue')
    const [contador, setContador] = useState (0);

    useEffect (()=> {
        console.log ('App montada');
        return () => {
            console.log ('Will')
        }
        

    }, []);
    console.log ('Aqui seria el ...')

    const agregar = () => {
            setContador (contador + 1);

    }
    const eliminar = () => {
            setContador (contador - 1);

    }
    return (
        <div style={{backgroundColor: initialValue}}>
            <h3>¿Quiénes somos?</h3>
            <h2>{lorem}</h2><h2>{lorem2}</h2>
            <h1>{contador}</h1>
            <button onClick={() =>agregar() }>
                Agregar articulo
            </button>
            <button onClick={() =>eliminar() }>
                Eliminar articulo
            </button>
           {/*  <img src={logo} className="App-logo" alt="logo" /> */}
        </div>

    );
};

export default FunctionalComponent;