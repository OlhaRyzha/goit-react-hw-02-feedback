import { Component } from 'react';
import { Feedback } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  option = {
    good: 'good',
    neutral: 'neutral',
    bad: 'bad',
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? `${((good / total) * 100).toFixed()}%` : 0;
  };
  onLeaveFeedback = e => {
    this.setState(prevState => {
      return {
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <Feedback
            options={this.option}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <p>No feedback diven</p>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              positivePercentage={this.countPositiveFeedbackPercentage()}
              totalFeedback={this.countTotalFeedback()}
            />
          )}
        </Section>
      </div>
    );
  }
}
