import React, {Component} from 'react';
import './UploadPosts.css';

class UploadPosts extends Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  render() {
    return (
      <div className="newPost__instagram">
        <img className="selectedImage__instagram" alt="new_post" title="new_post" src={this.state.file}/>
        <div className="imagePicker__instagram">
          <p>Select Image</p>
          <input className="selectFile__instagram" type="file" onChange={this.handleChange}/>
        </div>
      </div>
    );
  }
}

export default UploadPosts;