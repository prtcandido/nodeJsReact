import { Link } from "react-router-dom";
import {useEffect} from 'react';
import './style.css';

function Menu() {

    return(
        <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/produto">Produto</Link>
        </div>
    )
}
export default Menu