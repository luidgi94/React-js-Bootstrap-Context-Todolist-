import React from 'react';
import { FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash } from 'react-icons/fa'
import { NavLink, Link } from 'react-router-dom'
import '../css/App.css';


function NavBar(props) { // INFO : Lorsqu'on envoit une fonction en attribut d'un composant elle est contenu dans les props du composant
// mais dans le fichier .js il faut pas oublier de mettre en attribu funct(props) pour utiliser cette fonction avec props.func 
//dans la fonction principale du composant

const suppression = () => 
{
  console.log('ON SUPPRIME')
  props.supprimerTache()
}
  return (
    <>
      <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter"> 
        <div className="btn-group">
          <NavLink to="/" exact={true} className="btn btn-outline-dark bg-light"><FaListAlt /></NavLink>
          <NavLink to="/completed" className="btn btn-outline-dark bg-light"><FaCheckSquare /></NavLink>
          <NavLink to="/add-task"  className="btn btn-outline-dark bg-light"><FaPlusSquare /></NavLink>
          <NavLink to="/supression" className="btn btn-outline-dark bg-light"><FaTrash /></NavLink>
          {/* <Link
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              <FaTrash />
          </Link> */}

        </div>
         {/* <form  onSubmit={suppression}>
            <button className="btn btn-outline-dark bg-light" type="submit" className="btn btn-primary"><FaTrash /></button>
        </form> */}
        <button className="btn btn-outline-dark bg-light" onClick={suppression}><FaTrash /></button>
        {/* <button className="btn btn-outline-dark bg-light" ><FaTrash /></button>  */}
      </footer>
    </>
  );
}

export default NavBar;




// const ToDo = (props) => {

// const changeCompleted = () => 
// {
//     props.onToggleCompleted(props.task.id)
// }

// return (
  
//       <li className="list-group-item d-flex align-items-center">
//       {/* {state.miseAjour} */}
//           {props.name} 
//           <button className={"btn btn-sm ml-auto " + (props.task.completed ? 'btn-success' : 'btn-outline-success')} onClick={() => changeCompleted()}>&#x2713;</button>
        
//       </li>  
// )
      
// }