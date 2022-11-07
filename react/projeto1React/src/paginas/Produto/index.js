import Lista from "../../componentes/Lista"
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
function Produto() {
 
    const axios = require('axios');
    const [produto,setProduto] = useState([])

    useEffect( ()=>{

        async function consultar(){
            const resposta = await axios.get("http://localhost:8000/api/produto");
            //console.log(resposta);
            setProduto(resposta.data.data)
        }

        consultar();

    } , []  )

    return(
        <div>
        <Link to='/produto/create'>Criar Novo</Link>
        <table>
            <caption>Produtos</caption>
            <tr><th>Descrição</th><th>Preço</th></tr>
            {produto.map( (p)=><tr key={p.id}>
                                <td>{p.descricao}</td>
                                <td>{p.preco}</td>
                                <td><Link to={'/produto/edit/' + p.id}>Editar</Link></td>
                                <td><Link to={'/produto/delete/' + p.id}>Excluir</Link></td>
                              </tr> )}
        </table>
        </div>
    )
}
export default Produto