import React, { Component, useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export const App =()=> {
  const[good, setGood] = useState(0);
  const[neutral, setNeutral] = useState(0);
  const[bad, setBad] = useState(0);

  console.log("state",good);
  plusVoice = option => {
    set{option}(option+1)
    
  };

  countTotalFeedback() {
  
    const total = good + neutral + bad;

    return total;
  }

  countPositiveFeedbackPercentage() {
    
    const percentage = Math.round((good / this.countTotalFeedback()) * 100);

    return percentage;
  }
  
 

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
            options={{good, neutral, bad}}
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
