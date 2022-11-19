import axios from 'axios';
import {useRef, useState, useCallback} from 'react';
import {Link} from 'react-router-dom';

function Create()
{
    const pdescricao = useRef('');
    const ppreco = useRef(0);
    //const [produto,setProduto] = useState({descricao:'',preco:0});
    const [status,setStatus] = useState('');
    async function gravar(e){
        e.preventDefault(); // cancela o submit
        try{
            //console.log(pdescricao.current);console.log(ppreco.current);
            const response = await axios.post('http://localhost:8000/api/produto',{descricao: pdescricao.current.value, preco: ppreco.current.value});
            //const response = await axios.post('http://localhost:8000/api/produto',produto);
            setStatus("Produto Cadastrado");
        } catch(erro) {
            setStatus(`Falha: ${erro}`);
        }
    }
    console.log("--------------");
    return(
        <div>
            <form onSubmit={ gravar }>
                Descrição: <input ref={pdescricao} />
                Preço: <input ref={ppreco}  />
                {/*Descriçao: <input value={produto.descricao} onChange={(e)=>{setProduto({...produto,descricao:e.target.value})}} />
                Preco: <input value={produto.preco} onChange={(e)=>{setProduto({...produto,preco:e.target.value})}} />*/}
                <button type='submit'>Enviar</button>
            </form>
            <h3>{status}</h3>
            <Link to='/produto'>Voltar</Link>
        </div>
    )
}
export {Create}