import React, {useState} from 'react';
import '../css/App.css';
import { BrowserRouter, Switch, Route, useRouteMatch } from 'react-router-dom' // useRouteMatch sert a redirection dans founction composant
import NavBar from '../components/NavBar';
import initialData from '../data/initialData';
import ToDoList from '../components/ToDoList';
import AddTask from '../components/AddTask';
// import uniqueid from 'uniqueid';

import ToDo from "./ToDo";


// AddTask
//   setTasks([...tasks, newTask]);
//  const newItem = {
//                 // {this.state.name ? {text: this.state.name + " doit faire " + this.state.text,} : {text: this.users[0] + " doit faire " + this.state.text,}} 
//                 text: this.state.name + " doit faire " + this.state.text, //Concat avec prénom tableau
//                 id: Date.now()
//             };
//             this.setState(state => ({
//                 items: state.items.concat(newItem),
//                 text: ''
//             }));

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
////////////////////////////  SUPPRESSION DES TACHES CMPLETEE ///////////
const supprimerTache = () => {
        console.log('ON EST DANS LA FONCTION')
        const tableauMisAjour = tasks.filter(tache => tache.completed === false);
        setTasks(tableauMisAjour);
    }
//////////////////////////////////// BARRE DE RECHERCHE //////////////////////
const search = (event)=> {
  let recherche = (event.target.value.substr(0,20))
}

  return (
    <section id="todo"> 
      <h1 className="m-3">MA TODOLISTE 😀🎉💖 </h1> 
      {/* <button onClick={Mac}> Incrementer</button><span>{text}</span> */}
       {/* <BrowserRouter forceRefresh = {true} > */}
      <BrowserRouter >
      
        <Switch>
          {/* <Route path="/" exact render={(props) => <ToDoList {...props} tasks={initialData} />} /> */}
          {/* <Route path="/completed"  exact render={(props) => <ToDoList {...props} tasks={initialData} />} /> */}
          {/* <Route path="/add-task"  exact component={AddTask} ajouteUneTache={ajouteUneTache} tasks={tasks} /> */}
           <Route path="/add-task"  exact render={(props) =><AddTask {...props} ajouteUneTache={ajouteUneTache} tasks={tasks}/>} />
          <Route path="/:filter?"  exact render={(props) => <ToDoList {...props} onToggleCompleted={onToggleCompleted}  tasks={tasks} />} />
          {/* <Route path="/supression"  exact render={(props) => <ToDoList {...props} supprimerTache={supprimerTache}  tasks={tasks} />} /> */}
          <Route path="/" component={()=> <div> ERREUR CETTE PAGE N'EXISTE PAS ....</div>}/>
        </Switch>
        <NavBar  supprimerTache={supprimerTache} />
     </BrowserRouter>

    </section>
  );
}

export default App;


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