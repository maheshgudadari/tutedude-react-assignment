import React, { Component } from "react";
class List extends Component {
state = [{
taskText:'',
tasksList:"",
isDone:''
}
  ]

    render() {
        return <>
            <h2>Hi, I am list Component</h2>
            <ul>
                <li>
                    <input type="checkbox" />
                </li>
            </ul>
        </>


    }
}

export default List;