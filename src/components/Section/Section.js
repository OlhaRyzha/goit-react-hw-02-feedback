import { Component } from 'react';
import { Title, Wrap } from './Section.styled';
import PropTypes from 'prop-types';

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

Section.protoType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
