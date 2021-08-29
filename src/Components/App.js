import { useState, useEffect } from 'react';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [negative, setNegative] = useState(0);
  const [rate, setRate] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (good === 0 && neutral === 0 && negative === 0) return false;
    setRate(Math.floor((good / (good + neutral + negative)) * 100));
    setTotal(good + neutral + negative);
  }, [good, neutral, negative]);

  const addGrade = (e) => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood((prev) => (prev += 1));
        break;
      case 'neutral':
        setNeutral((prev) => (prev += 1));
        break;
      case 'negative':
        setNegative((prev) => (prev += 1));
        break;
      default:
        return;
    }
  };

  return (
    <div className="wrapper">
      <h1>Please leave feedback</h1>
      <FeedbackOptions onClickFunc={addGrade} />
      <Statistics
        good={good}
        neutral={neutral}
        negative={negative}
        rate={rate}
        total={total}
      />
    </div>
  );
};

export default App;
