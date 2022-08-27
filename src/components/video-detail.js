import React, { Component } from 'react';

class VideoDetail extends Component {
    render() {
        return(
            <div className='col-md-8'>
                <div className='embed-responsive embed-responsive-16by9'>
                    <iframe className='embed-responsive-item' 
                     src="https://www.youtube.com/embed/0SCopio77gM" 
                     style={{height: '500px', width: '100%'}} />
                </div>
                <div className='details' style={{ marginTop: '10px', padding: '10px', border: '1px solid #ddd', borderRadious: '4px' }}>
                    <h4>Dokhina Hawaoa</h4>
                    <p>Song By Tahsan</p>


                </div>
            </div>
        );
    }
}

export default VideoDetail;