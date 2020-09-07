import React, { useState, useContext } from "react";
import ListeContext from "../Store/ListeContext"

const AddTask = (props) => {

const ListeContextValue = useContext(ListeContext)
const [text,setText ] = useState("")
const handleChange = (e)=>{
  console.log(e.target.value);
  setText(e.target.value );
}

const handleSubmit= (e)=>{
  e.preventDefault(); // Empeche de recharger la page web avec le submit
      if (text.length <= 4 || text ==="") 
      {
          return;
      }
      ListeContextValue.ajouteUneTache(text); 
      props.history.push('/'); // Change la Route et revient sur la Liste de départ pour afficher la nouvelle tache
  }
return (
      <>
      <section>
      <h1 className="mt-3">Nouvelle tâche</h1>
      <div className="card mx-3">
          <form className="card-body"
          onSubmit={handleSubmit}
          >
              <div className="form-group">
                  <label form="taskName">Nom de la tâche</label>
                  <input type="text" 
                  className="form-control" 
                  name="taskName" 
                  id="taskName"
                  onChange={handleChange}
                  value={text}
                  //  required ref={this.state.newTask} 
                  />
              </div>
              <button type="submit" className="btn btn-primary">Créer</button>
          </form>
    </div>
    </section>
    </>
  );
}

export default AddTask;