import React, { Component } from 'react';

export default class extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={bookt.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this_renderList()}
      </ul>
    )
  }
}
