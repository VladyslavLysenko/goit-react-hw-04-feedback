import { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { SectionPart } from './Section/Section';
import { GlobalStyle } from '../GlobalStyle';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['Good', 'Neutral', 'Bad'];

  const handleIncrement = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(value => value + 1);
        break;

      case 'neutral':
        setNeutral(value => value + 1);
        break;

      case 'bad':
        setBad(value => value + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / (countTotalFeedback() || 1)) * 100);
  return (
    <>
      <GlobalStyle />
      <SectionPart title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleIncrement} />
      </SectionPart>
      <SectionPart title="Statistics">
        {countTotalFeedback ? (
          <Statistics
            valueGood={good}
            valueNeutral={neutral}
            valueBad={bad}
            totalFeedback={countTotalFeedback}
            positiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </SectionPart>
    </>
  );
}
