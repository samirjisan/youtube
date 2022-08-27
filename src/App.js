import React, { Component } from 'react';
import SearchBar from './components/searchbar';
import VideoDetail from './components/video-detail';
import VideoList from './components/video-list';
// import VideoList from './components/video-list-item';
import axios from 'axios';


class App extends Component {
  state = {
    searchTerm: '',
    data: {},
    videoId: '',
    title: '',
    description: ''
  }


// constructor() {
//   super();
//   console.log('jiu1');
// }

handleChange = (event) => {
  const value = event.target.value;
  // console.log(value);

  const newState = {searchTerm: value, data: this.state.data, videoId: this.state.videoId, title: this.state.title, description: this.state.description };
  this.setState(newState);
}

// handleSelect = videoId => {

//   const newState = {searchTerm: value, data: this.state.data, videoId: videoId }

// }

handleSelect = (videoId, title, description) => {
  const newState = {searchTerm: this.state.value, data: this.state.data, videoId: videoId, title: title, description: description };
  this.setState(newState);

}

// componentDidMount() {
//   console.log('Ami Component Did Mount');

// }

componentDidUpdate(prevProps, prevState) {
  console.log('Ami Component Did Update');

  const getYoutubeVideos = () =>  {

    const url = 'https://www.googleapis.com/youtube/v3/search';
    const key = 'AIzaSyBO_1yjLgLdrc5B8aQa4-qf0W0miJt5uNM';
    const type = 'video';
    const part = 'snippet';
    const q  = this.state.searchTerm;

    const targetUrl = `${url}?key=${key}&type=${type}&part=${part}&q=${q}`;

    const promise = axios.get(targetUrl);

    

    const success = (response) => {

      const newState = {searchTerm: this.state.searchTerm, data: response.data,
         videoId: this.state.videoId, title: this.state.title, description: this.state.description }
      this.setState(newState);
    }

    const error = (error) => {
      console.log(error);
    }

    promise
    .then(success)
    .catch(error);



      // axios.get(targetUrl);
  }

  if(prevState.searchTerm !== this.state.searchTerm) getYoutubeVideos();


}

// getYoutubeVideos = () => {

// }

render () {
  // console.log('lop3');
  const items = this.state.data.items || [];
    return (
      <div className='container'>
        <div style={{ margin: '20px', textAlign: 'center'}}>
            <input onChange={this.handleChange} style={{ width: '75%'}}/>
            <br /> <span>{ this.state.searchTerm }</span>
        </div>

        <div className='row'>
          <div className='col-md-8'>
          <div className='embed-responsive embed-responsive-16by9'>
                  <iframe
                      className='embed-responsive-item' 
                      // src="https://www.youtube.com/embed/0SCopio77gM"
                      src={`https://www.youtube.com/embed/${this.state.videoId}`}
                      style={{height: '500px', width: '100%'}} 
                      />
                </div>
                <div className='details' style={{ marginTop: '10px', padding: '10px', border: '1px solid #ddd', borderRadious: '4px' }}>
                    <h4>{this.state.title}</h4>
                    <p>{this.state.description}</p>
                </div>
          </div>
          <div className='col-md-4'>
          <ul className="list-group col-md-4">
            {
              items.map(item => {
                const imgUrl = item.snippet.thumbnails.high.url;
                const title = item.snippet.title;
                const description = item.snippet.description;
                const videoId = item.id.videoId;

                return (

                  <li onClick={ (event) => {
                    console.log(videoId);
                    this.handleSelect(videoId, title, description);
                  }} className="list-group-item media videolist"
                  style={{wifth: '100%'}} 
                  >

                    <div style={{width: '100%'}}>
                    <img
                      className='mr-3'
                      src={imgUrl}
                      // height="202"
                      // width="360"
                    />
                    </div>
                  
                    <div className='media-body'>
                      {title}
                    </div>
                  </li>
                )
              })
            }
              
          </ul>
          </div>
        </div>

      </div>
    );
}
}

export default App;
