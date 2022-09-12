import { Box } from "./Box.Styled";
import { GlobalStyles } from "./GlobalStyles";

import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";
import { useState } from "react";



export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const feedOption = (type) => {
    switch (type) {
      case 'good':
        setGood(good + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      default:
        break;
    }
  }

  const countTotalFeedback = () => {
    return good + bad + neutral
  }
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flextStart"
      listStyle="none"
      p="24px">
      <Section title={'Please leave feedback'}>
        <FeedbackOptions onLeaveFeedBack={feedOption} />
        <Section title={'Statistics'}>
          {countTotalFeedback() ? (
            <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
          ) : (<Notification message={'There is no feedback'} />)}
        </Section>
      </Section>
      <GlobalStyles />
    </Box>
  )
}



