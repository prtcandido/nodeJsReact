import axios from 'axios';
import {useState,useEffect} from 'react';
import { useParams, Link } from 'react-router-dom'

function Edit()
{
    const { id } = useParams();
    const [produto,setProduto] = useState({});
    const [status,setStatus] = useState('');
    useEffect(()=>{
        async function consultar() {
            const response = await axios.get(`http://localhost:8000/api/produto/${id}`);
            setProduto(response.data.data);
        }
        consultar();
    },[]);
    async function gravar(e){
        e.preventDefault(); // cancela o submit
        try{
            const response = await axios.put(`http://localhost:8000/api/produto/${id}`,produto);
            setStatus("Produto Atualizado");
        } catch(erro) {
            setStatus(`Falha: ${erro}`);
        }
    }
    return(
        <div>
            <form onSubmit={ gravar }>
                Descrição: <input value={produto.descricao} onChange={ (e)=>{setProduto({...produto,'descricao':e.target.value})} } />
                Preço: <input value={produto.preco} onChange={ (e)=>{setProduto({...produto,'preco':e.target.value})} } />
                <button type='submit'>Enviar</button>
                <Link to='/produto'>Voltar</Link>
            </form>
            <h3>{status}</h3>
        </div>
    )
}
export {Edit}