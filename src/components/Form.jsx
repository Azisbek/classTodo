import React, { Component } from "react";
import styled from "styled-components";

class Form extends Component {
  constructor() {
    super();
    this.state = { inputState: "" };
  }
  inputChangeHandler(e) {
    this.setState({ inputState: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.addClick({ title: this.state.inputState });
  }

  render() {
    return (
      <FormStyled onSubmit={this.onSubmit.bind(this)}>
        <input onChange={this.inputChangeHandler.bind(this)} type="text" />
        <button>Add</button>
      </FormStyled>
    );
  }
}
const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  background-color: #009dff;
  flex-direction: column;
  width: 500px;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  padding: 30px 0px;
  gap: 10px;
  border-radius: 10px;
  & input {
    width: 300px;
    padding: 3px;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
  }
  & button {
    padding: 4px 20px;
    background-color: #ff7b00;
    font-size: 20px;
    color: white;
    border-radius: 4px;
    border: none;
  }
`;

export default Form;
