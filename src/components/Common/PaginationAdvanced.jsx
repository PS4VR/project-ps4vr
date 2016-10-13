import React from 'react';
import ReactDOM from 'react-dom';
import {Pagination} from 'react-bootstrap';

class PaginationAdvanced extends React.Component{
  constructor(props) {
    super(props);
    this.activePage = 1;
  }

  handleSelect(eventKey) {
    // this.setState({
    //   activePage: eventKey
    // });
  }

  render(){
    return (
      <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={20}
        maxButtons={5}
        activePage={this.activePage}
        onSelect={this.handleSelect} />
    );
  }
}
export default PaginationAdvanced;
