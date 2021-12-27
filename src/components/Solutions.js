// import Letter from "./Letter";
import { Component } from "react";

class Solution extends Component {
//   constructor() {
//     super();
//   }
  solution() {
    return this.props.solution();
  }
  render() {
    return this.solution();
  }
}
export default Solution;