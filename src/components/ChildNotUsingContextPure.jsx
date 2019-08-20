import React, { PureComponent } from 'react';

export default class ChildNotUsingContextMemoized extends PureComponent {
  render() {
    console.log('Pure Component rendered');
    return (
      <span>Hola, I am a pure component</span>
    );
  }
}