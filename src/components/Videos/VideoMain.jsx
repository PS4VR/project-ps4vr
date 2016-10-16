import React from 'react';
import ReactDOM from 'react-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap'; 

class VideoMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [
        {
          'title': 'RIGS Mechanized Combat League',
          'video_url': 'https://www.youtube.com/embed/gDO7Ockyurk'
        },
        {
          'title': 'Batman Arkham VR',
          'video_url': 'https://www.youtube.com/embed/Ya8v30zzpQo'
        },
        {
          'title': 'The London Heist (VR Worlds)',
          'video_url': 'https://www.youtube.com/embed/z0HMLA-KzeM'
        },
        {
          'title': 'Tumble VR',
          'video_url': 'https://www.youtube.com/embed/T460pq02xs0'
        }
      ]
    };
  }
  render() {
    let videoItems = [];
    this.state.videos.forEach((item, index) => {
      videoItems.push(
        <ListGroupItem className="videoItem" key={index}>
          <h2>{item.title}</h2>
          <iframe src={item.video_url} allowfullscreen></iframe>
        </ListGroupItem>
      );
    });
    return (
      <ListGroup>
        {videoItems}
      </ListGroup>
    );
  }
};

export default VideoMain;
