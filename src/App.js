import logo from './logo.svg';
import React, {
  useState
} from 'react';
import './App.css';
import allWords from './TrueChaosWords.json'

function App() {
  const [currentVerb, setCurrentVerb] = useState("");
  const [currentNoun, setCurrentNoun] = useState("");

  const getBoth = () => {
    getVerb();
    getNoun();
  }

  const getVerb = () => {
    setCurrentVerb(allWords["verbs"][Math.floor(Math.random() * allWords["verbs"].length)]);
  }

  const getNoun = () => {
    setCurrentNoun(allWords["nouns"][Math.floor(Math.random() * allWords["nouns"].length)]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={getBoth}>
          Generate spell!
        </button>
        <button onClick={getVerb}>
          Replace the verb!
        </button>
        <button onClick={getNoun}>
          Replace the noun!
        </button>
        <p>
          {currentVerb} {currentNoun}
        </p>
      </header>
    </div>
  );
}

export default App;
