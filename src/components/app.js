import React, { Component } from "react";
import CommentBox from "./comment-box";
import CommentList from "./comment-list";

export default class extends Component {
  render() {
    return (
      <div>
        <CommentBox />
        <CommentList />
      </div>
    );

  }
};
