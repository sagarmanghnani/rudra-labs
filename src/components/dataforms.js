import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Input from '@material-ui/core/Input';
import '../css/dataforms.css';


export class Dataform extends Component {
  render() {

    return (
      <Grid>
        <form/>
        <Row>
            <Col md={12} className = "col-margin">
                <Row>
                  <Col md={8}>Heading</Col>
                  <Col md={2}><button onClick ={() => 
                    {
                      this.props.setBold('heading')
                    }
                }>B</button></Col>
                  <Col md={2}><button id = "italic" onClick = {() => 
                    {
                      this.props.setItalic('heading')
                    }
                }>I</button></Col>
                </Row>
                <Row>
                  <Col md={8}>Body</Col>
                  <Col md={2}><button onClick ={() => 
                    {
                      this.props.setBold('body')
                    }
                }>B</button></Col>
                  <Col md={2}><button id = "italic" onClick = {() => 
                    {
                      this.props.setItalic('body')
                    }
                }>I</button></Col>
                </Row>
                <Row><Input type = "text" name = "heading" placeholder = "enter Heading" className = "input" onChange = {this.props.change}/></Row>
            </Col>
        </Row>




        <Row>
            <Col className = "col-margin">
              <Row><label>Body</label></Row>
              <Row><textarea type = "text" name = "Body" onChange = {this.props.change}></textarea></Row>
            </Col>
        </Row>
          <Row>
          <button type = "submit">submit</button>
          </Row>
            
      </Grid>
      
    )
  }
}

export default Dataform
