import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dataform from "./components/dataforms";
import Showform from "./components/showforms";
import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
  constructor(){
    super();
    this.state = {
      boldBody: false,
      boldHeading: false,
      italicBody: false,
      italicHeading: false,
      input:'',
      bold:false,
      italic:false,
      currentElement: '',
    }
    this.getValues = this.getValues.bind(this);
    // this.setStylings = this.setStylings.bind(this);
    this.changeBold = this.changeBold.bind(this);
    this.changeItalic = this.changeItalic.bind(this);
  }

  getValues(e)
  {
    console.log("handle changed");
    var inputting = e.target.name;
    console.log(inputting);
    this.setState({ [e.target.name]:e.target.value});
    
  }

  changeBold(element)
  {
    if(element == 'heading'){
      // const isBoldHeading = this.state.boldHeading;
      this.setState({
        boldHeading: !this.state.boldHeading,
      })
    }
    else if(element == 'body'){
      this.setState({
        boldBody: !this.state.boldBody,
      })
    }
    // this.setState({
    //   bold: !isBold,
    //   currentElement: element,
    // });
    
  }

  changeItalic(element)
  {
    if(element == 'heading'){
      // const isBoldHeading = this.state.boldHeading;
      this.setState({
        italicHeading: !this.state.italicHeading,
      })
    }
    else if(element == 'body'){
      this.setState({
        italicBody: !this.state.italicBody,
      })
    }
    // const isItalic = this.state.italic
    // this.setState({
    //   italic: !isItalic,
    //   currentElement: element,
    // });
  }

  // setStylings(id){
  //   var getElement = document.getElementById(id);
  //   if(this.state.bold){
  //     console.log(this.state.bold);
  //     getElement.style.fontWeight = 'bold'
  //   }
  //   if(!this.state.bold){
  //     getElement.style.fontWeight = ''
  //   }
  //   if(this.state.italic){
  //     getElement.style.fontStyle = 'italic'
  //   }
  //   if(!this.state.italic){
  //     getElement.style.fontStyle = ''
  //   }
    
  // }
  render() {
    return (
      <div className="App">
        <div className = "row">
          <div className = "col-lg-8 col-md-8">
            <img src = {require('./images/water-react.jpg')} className = "imagefix"/>
          </div>
          <div className = "col-lg-4 col-md-4">

          
          <Dataform change={this.getValues} setBold = {(ele) => {this.changeBold(ele)}} setItalic= {(ele) => {this.changeItalic(ele)}}/>
          </div>
        </div>
        <Showform values={this.state} isBoldHeading={this.state.boldHeading} isItalicHeading={this.state.italicHeading} isBoldBody={this.state.boldBody} isItalicBody={this.state.italicBody}/>
      </div>

    );
  }
}

export default App;
