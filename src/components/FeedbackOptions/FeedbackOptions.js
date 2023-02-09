import { Component } from 'react';
import { Button } from './FeedbackOptions.styled';
export class Feedback extends Component {
  render() {
    const { good, neutral, bad } = this.props.options;

    return (
      <>
        <Button name={good} onClick={this.props.onLeaveFeedback} type="button">
          Good
        </Button>
        <Button
          name={neutral}
          onClick={this.props.onLeaveFeedback}
          type="button"
        >
          Neutral
        </Button>
        <Button name={bad} onClick={this.props.onLeaveFeedback} type="button">
          Bad
        </Button>
      </>
    );
  }
}
