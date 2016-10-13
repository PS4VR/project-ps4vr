import React from 'react';
import ReactDOM from 'react-dom';
import TopHeader from '../TopHeader/TopHeader';
export default class Main extends React.Component {
  render() {
    return (
      <div>
        <TopHeader />
        {this.props.children}
      </div>
    );
  }

}