import {Link} from 'react-router-dom';
import {useState} from 'react';

function Home(props)
{
    const [abc,setAbc] = props.estado;
    return(
        <div>
        <h1>Home</h1>
        <Link to="/computador">Computador {abc}</Link>
        <button onClick={()=>{setAbc(abc + 1)}}>Incrementar</button>
        </div>
    )
}

export default Home