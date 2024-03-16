import { useState } from "react";
import "./index.scss";
import Result from './components/Results';
import Game from './components/Game';
import questions from './data/questions';

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} questions={questions} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} questions={questions} />
      )}
    </div>
  );
}

export default App;
