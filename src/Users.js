import React from 'react';

export const Users = ({producto, descripcion, precio}) => {
    return (
        <li>
            <h1>{producto}</h1>  
            <h3>{precio}</h3>
            <h4>{descripcion}</h4>
          
        </li>
    )
}