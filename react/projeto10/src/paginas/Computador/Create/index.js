import {useState} from 'react';
import axios from 'axios';

function Create(props){

    const [computador, setComputador] = useState({});
    const axios = require('axios');
    const [bbb,setBbb] = props.estado;
    const [status,setStatus] = useState("");

    async function apiCriar() {
        try {
            const response = await axios.post('http://localhost:8000/api/computador',computador);
            setStatus("Computador cadastrado");
        }
        catch (exxx)
        {
            setStatus(`Falha ao cadastrar computador (${exxx})`);
        }
    }

    function enviar(e){
        e.preventDefault();
        //console.log(JSON.stringify(computador))
        apiCriar();
    }

    return(
        <div>
        <form onSubmit={enviar}>
            Marca: <input value={computador.marca} onChange={(e)=>setComputador({...computador,'marca':e.target.value})} />
            Ram: <input value={computador.ram} onChange={(e)=>setComputador({...computador,'ram':e.target.value})} />
            Disco: <input value={computador.disco} onChange={(e)=>setComputador({...computador,'disco':e.target.value})} />
            <button type="submit">Enviar</button>
        </form>
        <p>{bbb}</p>
        <p>{status}</p>        
        </div>
    )
}
export default Create