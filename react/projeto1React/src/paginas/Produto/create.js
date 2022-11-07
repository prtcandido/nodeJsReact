import axios from 'axios';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function Create()
{
    const [produto,setProduto] = useState({});
    const [status,setStatus] = useState('');
    async function gravar(e){
        e.preventDefault(); // cancela o submit
        try{
            const response = await axios.post('http://localhost:8000/api/produto',produto);
            setStatus("Produto Cadastrado");
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
            </form>
            <h3>{status}</h3>
            <Link to='/produto'>Voltar</Link>
        </div>
    )
}
export {Create}