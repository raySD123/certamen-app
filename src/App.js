import './App.css';

import QuestionReader from './components/QuestionReader';

import { useState } from 'react';

import sampleQuestions from './sampleQuestions';

function App() {

  const [buzzed, setBuzzed] = useState(false);
  const [questionOver, setQuestionOver] = useState(false);
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [answerText, setAnswerText] = useState("");

  const [currentQuestion, setCurrentQuesion] = useState(0);

  return (
    <div className="App">

      <p>CURRENTLY UNDER DEVELOPMENT</p>
      <p>Email raymondpansd@gmail.com if you have suggestions or want to help out!</p>
      
      <QuestionReader 
        questionText={sampleQuestions[currentQuestion][0]}
        readingDelay={40}
        buzzed={buzzed}
      />
      
      <div className="buttonBar">
        <button className="button" onClick={() => {
          if (!buzzed) { setBuzzed(true); }
        }}>{buzzed? "Already Buzzed" : "Buzz [Space]"}</button>
        <button className="button" onClick={() => {
          if (questionOver) { 
            setCurrentQuesion((currentQuestion + 1) % sampleQuestions.length);
            setQuestionOver(false);
            setBuzzed(false);
            setAnswerText("");
          }
        }}>{questionOver? "Next [J]" : "Currently Reading"}</button>
      </div>

      {buzzed && (
        <div className="answerBar">
          <input 
            type='text'
            value={answerText}
            onChange={(e) => {setAnswerText(e.target.value)}}
            style={{ marginRight: "0.4vw", width: "20vw" }}
          />
          <button className="button" style={{ backgroundColor: "lightgreen" }} onClick={() => {
            setQuestionOver(true);
            if (answerText.toLowerCase() === sampleQuestions[currentQuestion][1].toLowerCase()) { 
              setAnswerCorrect(true);
            }
          }}>Check</button>
        </div>
      )}

      {questionOver && (
        <div style={{ margin: "1vw" }}>
          <p>{answerCorrect? "Correct!" : "Incorrect; the answer was " + sampleQuestions[currentQuestion][1]}</p>
        </div>
      )}

    </div>
  );
}

export default App;
