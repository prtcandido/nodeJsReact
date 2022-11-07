import axios from 'axios';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function Edit()
{
    const computador = useState({});
    const axios = require('axios');
    const {id} = useParams();
    const [status,setStatus] = useState("");

    useEffect(
        ()=>{

            async function obterComputador()
            {
                const response = await axios.get(`http://localhost:8000/api/computador/${id}`);
                const [comp, setComp] = computador;
                //console.log(response.data.data);
                setComp(response.data.data);
            }

            obterComputador();

        }
    ,[])

    async function gravar()
    {
        const [comp,setComp] = computador;
        try{
            const response = axios.put('localhost:8000/api/computador/{comp.id}',comp);
            setStatus('Ok');
        } catch (erro) {
            setStatus(erro);
        }
    }

    return(
        <div>
            {computador[0].marca}
        </div>
    )
}
export default Edit