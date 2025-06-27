import React, { Component, useState } from "react";


class Todo extends Component {
    state = [{
        taskText: '',
        tasksList: "",
        isDone: ''
    }
    ]
    constructor(props) {
        super(props);
    }

    //  const [task, setTask] = useState(" ");
    task = "";
    setTask(e) {
        this.task = e;
    }

    // ItemList=[];

    addItem = (e) => {
        alert("Item added ", e);
    }
    render() {
        return <>
            <h2>Hi, I am Todo Component</h2>
            <input type="text" value={this.state.taskText} onChange={this.handleChange.bind(this)} />
            <button onClick={() => this.addItem(this)} > add </button>
        </>


    }

handleChange(e){

    this.setState({
        taskText:e.target.value,
    })
}
}

export default Todo;

