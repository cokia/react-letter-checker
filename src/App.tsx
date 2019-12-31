import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form ,Table } from 'react-bootstrap';
import './App.css'
import Typography from '@material-ui/core/Typography';
import useDarkMode, {darkMode} from 'use-dark-mode';

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
    <Table responsive variant={darkMode.value ? 'dark' : 'light'} >
  <thead>
    <tr>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    </tbody>
</Table>
    <DarkModeToggle></DarkModeToggle>
    </div>
    );
  }
}

export default App;