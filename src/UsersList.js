import React  from 'react'
import { Users } from './Users';

const arreglo = [
    {
        producto: 'GUITARRA',
        descripcion: 'est tenetur voluptas eos exercitationem neque aut voluptas porr',
        precio: '$9521.62',
    },
    {
        producto: 'BAJO',
        descripcion:'est tenetur voluptas eos exercitationem neque aut voluptas porr',
        precio: '$8632.05',
    },
    
];

export const UsersList = () => {
    return (
    <ul>
        {arreglo.map( item => (
        <Users producto= {item.producto} descripcion = {item.descripcion} precio = {item.precio}/>
        ))}

    </ul>
    )
};
