import React from 'react';
import ReactDOM from 'react-dom';
import TopHeader from '../TopHeader/TopHeader';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    let style = {
      'max-height': '100%', 
      'background': '#F6F6F6'
    };
    this.state = {
      style: style
    };
  }
  render() {
    return (
      <div style={{'max-height': '100%'}}>
        <TopHeader />
        <div className="container" style={this.state.style}>
          {this.props.children}
        </div>
      </div>
    );
  }

}
