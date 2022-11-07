
import {useState} from 'react';

function Erro(props) {
    const [xxx,setXxx] = props.estado;
    return(
        <h3>Página não existe {xxx}</h3>
    )
}
export default Erro