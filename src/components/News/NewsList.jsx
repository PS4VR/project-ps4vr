import React from 'react';
import ReactDOM from 'react-dom';
import NewsItem from './NewsItem'

class NewsList extends React.Component {
  constructor(props) {
    super(props);

    this.listArray = ['a', 'b', 'c'];
  }

  renderItems() {

    return this.listArray.map((item, i) => {
      return (
        <NewsItem key={i}/>
      );
    });
  }

  render() {
    return(
      <div>
        { this.renderItems() }
      </div>
    );
  }
}

export default NewsList;
