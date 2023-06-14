import { useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";

export const App = () => {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
 

  const plusVoice = (option) => {
    setValues((prevValues) => ({
      ...prevValues,
      [option]: prevValues[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = values;
    const total = good + neutral + bad;

    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = values;
    const percentage = Math.round((good / countTotalFeedback()) * 100);

    return percentage;
  };

  return (
    <div
      style={{
        height: "100vh",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontSize: 40,
        color: "#010101",
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={plusVoice}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={values.good}
            neutral={values.neutral}
            bad={values.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
