import React from 'react';
import '../css/App.css';
import ToDo from '../components/ToDo';

  
function ToDoList(props) {
    let filteredTasks;
    let buttonColor =1;
    
     switch (props.match.params.filter){   // Gere l'Affichage des route selon le filtre la  valeur de params filter peut etre visible avec f12 dans component todolist
        case 'completed':
           filteredTasks = props.tasks.filter(
            (taches_filtree)=>{
              return taches_filtree.completed === true
            })
          
        break;
        default:
         filteredTasks = props.tasks
     }
     let Affichage= (tache_affiche)=>(
   
      filteredTasks.length === 0? <li> Aucune tache n'a encore été complétée </li> : filteredTasks.map( task =>(<ToDo task={task} completed={task.completed} onToggleCompleted={props.onToggleCompleted} name={task.name} key={task.id} id={task.id} pseudo={task.prenom} />)) //?buttonColor="btn btn-sm ml-auto btn-outline-success":buttonColor="btn btn-sm ml-auto btn-outline-success active"
     )
// console.log({props})
  return (
    <>
        <ul className="list-group m-3">
          <Affichage/>
          {/* {filteredTasks.map( task =><ToDo  name={task.name} key={task.id}  />)} */}

          {/* {props.tasks.map(task => (
                    <li key={task.id}>{task.name}</li>
                ))} */}
        
        </ul>
    </>
  );
}

export default ToDoList;





//= NOTES ===============================================================

     //  <li> bonjour !</li>
      //  if(filteredTasks.length === 0){
      //    return console.log('salut !!')
      //   //  return React.createElement('li', {}, 'Aucune tache n\'a encore été complétée');
      //   // return <li> Aucune tache n'a encore été complétée </li>
      //  }
      //  else{
      //    filteredTasks.map( task =>(
      //       buttonColor++; console.log(buttonColor);
      //    <ToDo completed={task.completed} onToggleCompleted={props.onToggleCompleted} name={task.name} key={task.id} id={task.id} pseudo={task.prenom} />
      //    ))
      //  }
      // filteredTasks.map((task, id) => <ToDo task={task} key={id} onToggleCompleted={onToggleCompleted} />)




// = NOTE ===============================================================


// const Card = ({ card, feedback, onClick}) => (
//   <div className={`cards ${feedback}`} onClick={()=>onClick(card)}>
//       <span className="symbol">
//       {feedback==='hidden' ? HIDDEN_SYMBOL : card} 
//       </span>
//   </div>
  
  
  // )
//   let filteredTasks
//  switch (props.match.params.filter){
//  case 'completed':
//  A completer …..
//  break;
//  default:
 