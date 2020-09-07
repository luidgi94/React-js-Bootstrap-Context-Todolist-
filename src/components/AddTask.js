import React, { Component } from 'react'
import ReactDOM from 'react-dom';
// import { useHistory} from 'react-router-dom'
import { withRouter, useHistory } from 'react-router-dom';


// function AddTask() 
// {

 class AddTask extends React.Component {
 constructor(props)
 {
  super(props)
  this.state = {newTask: "",text: ""}
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleChange = this.handleChange.bind(this);
 }



  //   redirectToHome = () => {
  //  const { history } = this.props;
  //  if(history) history.push('/home');
  // }

  render()
  {

    // const { history } = this.props; // Marche nikel !!
    let history  = this.props.history;

    return (
    <>
    <section>
    <h1 className="mt-3">Nouvelle tâche</h1>
    <div className="card mx-3">
        <form className="card-body"
         onSubmit={this.handleSubmit}
         >
            <div className="form-group">
                <label form="taskName">Nom de la tâche</label>
                <input type="text" 
                className="form-control" 
                name="taskName" 
                id="taskName"
                onChange={this.handleChange}
                value={this.state.text}
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
  

 handleChange(e)
    {
      console.log(e.target.value);
        this.setState({ text: e.target.value });
    }

handleSubmit(e)
{
   e.preventDefault();
        if (this.state.text === 0) 
        {
            return;
        }
        this.props.ajouteUneTache(this.state.text);
          this.props.history.push('/');

        //  this.props.history.push('/');
           
}
}

export default AddTask;