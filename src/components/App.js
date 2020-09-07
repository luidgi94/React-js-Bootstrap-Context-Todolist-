import React, {useState} from 'react';
import '../css/App.css';
import { BrowserRouter, Switch, Route, useRouteMatch } from 'react-router-dom' // useRouteMatch sert a redirection dans founction composant
import NavBar from '../components/NavBar';
import initialData from '../data/initialData';
import ToDoList from '../components/ToDoList';
import AddTask from '../components/AddTask';
import ListeContext from "../Store/ListeContext"

function App() {

  const [tasks, setTasks] = useState(initialData); // on recupere initialData les valeur en propriete 
  console.log('App rechargement');
/////////////// GERE LES AJOUT DE TACHES /////////

  const ajouteUneTache = (valeur_du_input) =>{
    const tacheAjout = [ {id: tasks.length, name: valeur_du_input, completed :false}] 
    let touteTache = tasks;
    let ancienneTache = tasks.map(task => (task));
    setTasks([...tacheAjout, ...ancienneTache]);
  
  }
//////////////////// VALIDATION DES TACHES COMPLETES ///////////////

  const onToggleCompleted = (taskId) => {
      let taskToUpdate = tasks.find(task => task.id === taskId)
      taskToUpdate.completed = !taskToUpdate.completed
      let newTasks = tasks.map(task => (task.id === taskId ? taskToUpdate : task));
      setTasks(newTasks);
      
  }
////////////////////////////  SUPPRESSION DES TACHES COMPLETEE ///////////
  const supprimerTache = () => {
          console.log('ON EST DANS LA FONCTION')
          const tableauMisAjour = tasks.filter(tache => tache.completed === false);
          setTasks(tableauMisAjour);
  }


  const listeContextValue = {
    tasks,
    ajouteUneTache, // equivaut à ajouteUneTache: ajouteUneTache()
    supprimerTache, // equivaut à supprimerTache: supprimerTache()
    onToggleCompleted,
  }

  return (
    <ListeContext.Provider value={listeContextValue}>
    <section id="todo"> 
      <h1 className="m-3">MA TODOLISTE💖 </h1> 
      <BrowserRouter >
        <Switch>
          <Route path="/add-task"  exact render={(props) =><AddTask {...props}  />} />
          <Route path="/:filter?"  exact render={(props) => <ToDoList {...props} />} />
          <Route exact path="/" component={()=> <div> ERREUR CETTE PAGE N'EXISTE PAS ....</div>}/>
          <Route component={()=> <div> ERREUR CETTE PAGE N'EXISTE PAS ....</div>}/>
        </Switch>
        <NavBar />
     </BrowserRouter>
    </section>
    </ListeContext.Provider>
  );
}

export default App;






//////////////////////////////////// BARRE DE RECHERCHE //////////////////////
// const search = (event)=> {
//   let recherche = (event.target.value.substr(0,20))
// }

 {/* <button onClick={Mac}> Incrementer</button><span>{text}</span> */}
      {/* <BrowserRouter forceRefresh = {true} > */}

{/* <Route path="/supression"  exact render={(props) => <ToDoList {...props} supprimerTache={supprimerTache}  tasks={tasks} />} /> */}
  {/* <Route path="/" exact render={(props) => <ToDoList {...props} tasks={initialData} />} /> */}
          {/* <Route path="/completed"  exact render={(props) => <ToDoList {...props} tasks={initialData} />} /> */}
          {/* <Route path="/add-task"  exact component={AddTask} ajouteUneTache={ajouteUneTache} tasks={tasks} /> */}


// == Internal helpers ==============================================


  // const [tasks, setTasks] = useState(initialData);
// let copyTasks = tasks; // = initalData (tableau)
// console.log(React.version);
 // console.log(taskId,'voici la valeur de l\'id complete')
  // setTasks(
  //   tasks.map(task => {
  //   if (task.id = taskId){
  //    return task.completed = !task.completed;
  //   }
  // })
  // );

// == Tuto useState =========================================================
 // // TEST USESTATE (HOOK)
  // const [text, setText] = useState(1)  (il faut activer mac dans le render )
  // const Mac =()=> {
  //   setText(text + 1);
  // }