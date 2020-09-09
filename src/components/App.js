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





