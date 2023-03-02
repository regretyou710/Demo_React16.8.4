import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { createAddPersonAction } from "../../redux/actions/person";

class Person extends Component {
  handleAge = (currentNode) => {
    this.ageNode = currentNode;
  };

  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value * 1; // 轉型
    const personObj = { id: nanoid(), name, age };
    // console.log(personObj);
    this.props.addPerson(personObj);

    this.nameNode.value = "";
    this.ageNode.value = "";
  };

  render() {
    return (
      <div>
        <h2>我是Person組件，上方組件求和為:{this.props.sum}</h2>
        <input
          ref={(currentNode) => {
            this.nameNode = currentNode;
          }}
          placeholder="輸入名字"
        />
        <input ref={this.handleAge} placeholder="輸入年齡" />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.persons.map((person) => {
            return (
              <li key={person.id}>
                名字{person.name}--年齡{person.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return { persons: state.personReducer, sum: state.countReducer };
  },
  {
    addPerson: createAddPersonAction,
  }
)(Person);
