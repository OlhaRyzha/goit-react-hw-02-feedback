import { Component } from 'react';
import { Card } from './Statistics.styled';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, totalFeedback, positivePercentage } =
      this.props;

    return (
      <>
        <Card>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>Positive feedback: {positivePercentage}</li>
        </Card>
      </>
    );
  }
}
