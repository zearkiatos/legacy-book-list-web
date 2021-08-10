import React, { Component } from "react";
import BookList from "../containers/BookList";
import BookDetail from "../containers/BookDetail";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <BookList />
          </div>
          <div className="col-2">
            <BookDetail />
          </div>
        </div>
      </div>
    );
  }
}
