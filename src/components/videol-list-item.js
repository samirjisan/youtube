import React, { Component } from 'react';

class VideoListItem extends Component {
    render() {
        const { src, title } = this.props;
        
        return(
            // <div className='col-md-4'>
            // <h1>VideoList</h1>
            // </div>
            
                    <li className="list-group-item media videolist" >
                        <img
                          className='mr-3'
                          src={src} />
                          <div className='media-body'>
                            {title}
                          </div>
                    </li>
            
        );
    }
}

export default VideoListItem;