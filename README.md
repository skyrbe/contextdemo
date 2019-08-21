Basically, the render prop pattern limits the way we can use the context.
 
Use the following pattern only when it's sufficient to use the context in the render
import { WidgetConsumer } from './WidgetContext'

<WidgetConsumer >
  {widget => {
    return <div>{widget.name}</div>
  }}
</WidgetConsumer >
 
For stateful and functional components where you want to use the context elsewhere,
 
Simple example for using context in the lifecycle methods of stateful components. The important bit marked in bold.
 

import React, { Component } from 'react';
import WidgetContext from './WidgetContext';

class WidgetBlade extends Component {
  componentDidMount() {
    const widget= this.context;
    console.log(widget); // logs the context
  }
  
  render() {
    return (<span></span>);
  }
}

WidgetBlade.contextType = WidgetContext;
 
Simple example for using context outside the return of functional components. The important bit marked in bold.
 

import React, { useContext } from 'react'
import WidgetContext from './WidgetContext '

function WidgetBlade () {
  const widget= useContext(WidgetContext );

 
  handleClick = (e) => {
    console.log(widget); //logs the context
  }
  return (<button onClick={handleClick} />)
}