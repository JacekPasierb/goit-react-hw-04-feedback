import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    // CZY STAN POWINIEN BYĆ W KONSTRUKTORZE ?
    good: 0,
    neutral: 0,
    bad: 0,
  };
  options = Object.keys(this.state);
  plusVoice = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const percentage = Math.round((good / this.countTotalFeedback()) * 100);

    return percentage;
  }
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.plusVoice}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
