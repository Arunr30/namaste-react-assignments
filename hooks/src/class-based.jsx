import { Component } from "react";

export class ClassComponent extends Component {
  componentDidMount() {
    console.log("page reloaded");
  }
  componentDidUpdate() {}
  componentWillUnmount() {}
}
