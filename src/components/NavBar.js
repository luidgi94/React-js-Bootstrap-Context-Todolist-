import React, {useContext} from 'react';
import { FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash } from 'react-icons/fa'
import { NavLink, Link } from 'react-router-dom'
import ListeContext from "../Store/ListeContext"
import '../css/App.css';


function NavBar(props) { // INFO : Lorsqu'on envoit une fonction en attribut d'un composant elle est contenu dans les props du composant
// mais dans le fichier .js il faut pas oublier de mettre en attribu funct(props) pour utiliser cette fonction avec props.func 
//dans la fonction principale du composant
const listeContextValue = useContext(ListeContext) // on met en place la valeur du context 

  const suppression = () => 
  {
    console.log('ON SUPPRIME')
    listeContextValue.supprimerTache()
  }
  return (
    <>
      <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter"> 
        <div className="btn-group">
          <NavLink to="/" exact={true} className="btn btn-outline-dark bg-light"><FaListAlt /></NavLink>
          <NavLink to="/completed" className="btn btn-outline-dark bg-light"><FaCheckSquare /></NavLink>
          <NavLink to="/add-task"  className="btn btn-outline-dark bg-light"><FaPlusSquare /></NavLink>
          <NavLink to="/supression" className="btn btn-outline-dark bg-light"><FaTrash /></NavLink>
       

        </div>

        <button className="btn btn-outline-dark bg-light" onClick={suppression}><FaTrash /></button>
      </footer>
    </>
  );
}

export default NavBar;


