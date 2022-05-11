import React , {Component} from 'react' ;
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class fileupload_test extends React.Component {
    state = {selectedFiles: []};
    
    handleSelectedFile = (event) => {
      //***Convert file input result to an array, then store it in state.
      this.setState({ selectedFiles: Array.from(event.target.files) })
    }
  
    render() {
      return (
        <div>
          <input
            type="file"
            name="file"
            id="file-upload"
            multiple
            onChange={this.handleSelectedFile}
          />
          
          {/****Show names of selected files and number of them.*/}
          <p><b>{this.state.selectedFiles.length} file(s) selected</b></p>
          {this.state.selectedFiles.map((file) => (
            <p key={file.name}>
              {file.name}
            </p>
          ))}
          
        </div>
      )
    }
  }
// export default fileupload_test;
ReactDOM.render(<FileInput />, document.body)
