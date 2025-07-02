import React, { Component } from "react";


class Todo extends Component {
    state ={
        taskText: '',
        tasksList: [],
        isDone: true
    }
    constructor(props) {
        super(props);
       
    }

    //  const [task, setTask] = useState(" ");
    task = "";
   

    render() {
        return <>
            <h2>Hi, I am Todo Component</h2>
            <input type="text" 
            value={this.state.taskText} 
            name="task" 
            onChange={this.handleChange.bind(this)} />
            <button onClick={this.addItem.bind(this)}> add </button>
        
         <ul>
            
          {this.state?.tasksList?.map((data, key) => (
            <li key={key}>{data}</li>
          ))}
        </ul>
        </>

    }

handleChange(e){

    this.setState({
        taskText:e.target.value,
    })
}

addItem(e){
    if (!this.state.taskText?.length) {
      return;
    } 
    this.setState({
      taskText: "",
      tasksList: [...this.state.tasksList, this.state.taskText],
      isDone: false
    });
  }

}


export default Todo;

