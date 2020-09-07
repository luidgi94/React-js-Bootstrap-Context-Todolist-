
import '../css/App.css';
import React, { Component } from 'react';
import App from '../components/App';




const ToDo = (props) => {  // ATTENTION DE METTRE PROPS EN PARAMETRE lorsquon envoi une props ou une fonction en heritage pour l'utiliser

const changeCompleted = () => 
{
    props.onToggleCompleted(props.task.id)
}

return (
  
      <li className="list-group-item d-flex align-items-center">
      {/* {state.miseAjour} */}
          {props.name} 
          <button className={"btn btn-sm ml-auto " + (props.task.completed ? 'btn-success' : 'btn-outline-success')} onClick={() => changeCompleted()}>&#x2713;</button>
        
      </li>  
)
      
}
  


export default ToDo;

//////////// USESTATE EN CLASSE ////////

// class ToDo extends Component {

//   constructor(props) 
//   {
//     super(props);
//     this.state = {isToggleOff: false, bouton_change: "btn btn-sm ml-auto btn-outline-success", completed:this.props.completed }; // , miseAjour : this.MiseAjourTache()
//     this.changeCompleted = this.changeCompleted.bind(this);
    
//   }

 
// changeCompleted() 
// {
//         this.props.onToggleCompleted(this.props.task.id)
//     }


//     render() {
//       return (
        
//             <li className="list-group-item d-flex align-items-center">
//             {/* {this.state.miseAjour} */}
//                 {this.props.name} 
//                 <button className={"btn btn-sm ml-auto " + (this.props.task.completed ? 'btn-success' : 'btn-outline-success')} onClick={() => this.changeCompleted()}>&#x2713;</button>
              
//             </li>  
//       )
      
//     }
//   }


