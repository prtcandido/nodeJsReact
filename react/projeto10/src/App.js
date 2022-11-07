import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Create from './paginas/Computador/Create';
import Edit from './paginas/Computador/Edit';
import Index from './paginas/Computador/Index';
import Erro from './paginas/Erro';
import Home from './paginas/Home';
import {useState} from 'react';

function App() {
  const yyy = useState(100);
  const [hhh,setHhh] = yyy;
  return (
    <div>
    <p>{hhh}</p>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home estado={yyy} />} />
        <Route path="/computador" element={ <Index />} />
        <Route path="/computador/create" element={ <Create estado={yyy} />} />
        <Route path="/computador/:id/edit" element={ <Edit />} />
        <Route path="*" element={ <Erro estado={yyy} />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
