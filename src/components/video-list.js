import React, { Component } from 'react';
import VideoListItem from './videol-list-item';

class VideoList extends Component {
    render() {
        return(
            // <div className='col-md-4'>
            // <h1>VideoList</h1>
            // </div>
            <ul className="list-group col-md-4">
                <VideoListItem 
                src='https://i.ytimg.com/vi/9Oa_mWpckns/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAGKoIkF74qthrAcxggty_W051Ttw'
                title='Tahsan Song'
                />
                <VideoListItem />
                <VideoListItem />
                <VideoListItem />
            </ul>
            
                    // <li className="list-group col-md-4">An Item</li>
            
        );
    }
}

export default VideoList;