import React from 'react';
import ReactDOM from 'react-dom';
import NewsList from './NewsList';
import PaginationAdvanced from '../Common/PaginationAdvanced'
const NewsMain = ({}) => (
  <div >
    <div className="text-center">
      <PaginationAdvanced className="center"/>
    </div>
    <ul className="itemPadding">
      <NewsList/>
    </ul>
  </div>
);

export default NewsMain;
