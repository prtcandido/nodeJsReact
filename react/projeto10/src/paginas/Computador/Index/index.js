import axios from 'axios';
import './style.css';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function Index() {
  
  const [listaComputador,setListaComputador] = useState([]);
  const axios = require('axios');
  
  useEffect(()=>{

    async function consulta(){
      const response = await axios.get('http://localhost:8000/api/computador');
      setListaComputador(response.data.data);
    }
    consulta();
  },[])

  return(
    <div>
        <Link to="/computador/create">Criar</Link>
        <h1>Lista Computador</h1>
        <ul>
            {listaComputador.map((c) => <li key={c.id}>{c.marca}<Link to={"/computador/" + c.id + "/edit"}>Editar</Link></li>)}
        </ul>
    </div>
  )   
}

export default Index