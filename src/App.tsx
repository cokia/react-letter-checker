import * as React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import './App.css'
import Typography from '@material-ui/core/Typography';
import DarkModeToggle from './components/darkmode';

class App extends Component {

  state = { 
    value: '' ,
    spaceCounter: '',
};
  onChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const newValue:string = e.target.value;
    var space_counter = (newValue.match(/ /g) || []).length;
    this.setState({
      number: newValue,
      spaceCounter: space_counter
    });

 }


  render() {
    return (
      <div>
        
     <Typography id="maintitle" variant="h2" color="inherit" noWrap> <span role="img" aria-label="chaticon">💬</span> 글자수 계산기</Typography>
      <Form>
      <Form.Group id="ControlTextarea">
      <Form.Control onChange={this.onChange} id="textarea" as="textarea" rows="20"/>
    </Form.Group>
    </Form>
    <DarkModeToggle></DarkModeToggle>
        </div>
    );
  }
}

export default App;