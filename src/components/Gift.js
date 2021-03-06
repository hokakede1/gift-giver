import React, { Component } from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

export class Gift extends Component {
  state = {person: '', present: ''}

  render() {
    return (
      <div>
        <Form>
            <FormGroup>
                <ControlLabel>Person</ControlLabel>
                <FormControl 
                    className='input-person' 
                    onChange={event => this.setState({ person: event.target.value })}
                />
            </FormGroup>
            <FormGroup>
                <ControlLabel>Present</ControlLabel>
                <FormControl 
                    className='input-present' 
                    onChange={event => this.setState({ present: event.target.value })}
                />
            </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Gift;
