import React, {PropTypes}  from 'react';
import ReactDOM from 'react-dom';

class NewsItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="newsItem clearfix">
        <img className="listItemImage pull-left" src={this.props.item.image_url}/>
        <h4 className="listItemTitle">{this.props.item.title}</h4>
        <p className="listItemSubTitle">{this.props.item.subTitle}</p>
      </div>
    );
  }
}

export default NewsItem;
