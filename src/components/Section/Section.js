import { Component } from 'react';
import { Title, Wrap } from './Section.styled';

export class Section extends Component {
  render() {
    return (
      <>
        <Title>{this.props.title}</Title>
        <Wrap>{this.props.children}</Wrap>
      </>
    );
  }
}
