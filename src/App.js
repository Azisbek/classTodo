import { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

const postData = [];
class App extends Component {
  constructor() {
    super();
    this.state = { data: postData };
    this.addClick = this.addClick.bind(this);
  }

  addClick(newItem) {
    this.setState({
      data: [newItem, ...this.state.data],
      newItem: "",
    });
  }

  render() {
    return (
      <div>
        <Form addClick={this.addClick} />
        <List data={this.state.data} />
      </div>
    );
  }
}
export default App;
