import logo from './logo.webp';
import React, {
  useState
} from 'react';
import './App.css';
import allWords from './TrueChaosWords.json'
import DocumentMeta from 'react-document-meta';

function App() {
  const [currentVerb, setCurrentVerb] = useState("");
  const [currentNoun, setCurrentNoun] = useState("");
  const [currentRangeMod, setCurrentRangeMod] = useState("");
  const [currentDamageMod, setCurrentDamageMod] = useState("");
  const [showRangeMod, setShowRangeMod] = useState(false);
  const [showDamageMod, setShowDamageMod] = useState(false);

  const getBoth = () => {
    getVerb();
    getNoun();
    clearAppend();
  }

  const getVerb = () => {
    setCurrentVerb(allWords["verbs"][Math.floor(Math.random() * allWords["verbs"].length)]);
  }

  const getNoun = () => {
    setCurrentNoun(allWords["nouns"][Math.floor(Math.random() * allWords["nouns"].length)]);
  }

  const getRangeMod = () => {
    let chanceOfIntendedTarget = Math.floor(Math.random() * 2);
    if (chanceOfIntendedTarget === 1) {
      setCurrentRangeMod(allWords["ranges"][0]);
    } else {
      setCurrentRangeMod(allWords["ranges"][Math.floor(Math.random() * (allWords["ranges"].length - 1)) + 1]);
    }
    setShowRangeMod(true);
  }

  const getDamageMod = () => {
    let damageDieAmount = Math.floor(Math.random() * 5) + 1;;
    let damageDie = allWords["damageDie"][Math.floor(Math.random() * allWords["damageDie"].length)];
    setCurrentDamageMod(damageDieAmount + damageDie);
    setShowDamageMod(true);
  }

  const clearAppend = () => {
    setShowRangeMod(false);
    setShowDamageMod(false);
  }

  const RangeMod = () => {
    return showRangeMod ? (
      <div className='Range-Mod-Div'>
        <p className='Range-Of'>cast with a range of:</p>
        <p className='Range-Modifier'>{currentRangeMod}</p>
      </div>
    ) : null
  }

  const DamageMod = () => {
    return showDamageMod ? (
      <div className='Damage-Mod-Div'>
        <p className='Damage-Of'>with a damage of:</p>
        <p className='Damage-Modifier'>{currentDamageMod}</p>
      </div>
    ) : null
  }

  const meta = {
    title: 'True Chaos Sorcerer Generator',
    description: 'The worst spells in all of tabletop gaming.'
  }

  return (
    <div className="App">
      <DocumentMeta {...meta} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='App-Buttons'>

          <button onClick={getBoth} className='App-Button-Main'>
            Generate spell!
          </button>

          <div className='App-Buttons-Extra'>
            <button onClick={getVerb}>
              Replace the verb!
            </button>
            <button onClick={getNoun}>
              Replace the noun!
            </button>
          </div>

          <div className='App-Buttons-Modifiers'>
            <button onClick={getRangeMod}>
              Append Target
            </button>
            <button onClick={getDamageMod}>
              Append Damage
            </button>
            <button onClick={clearAppend}>
              Clear Extras
            </button>
          </div>
        </div>

        <p className='Spell-Words'>
          {currentVerb} {currentNoun}
        </p>

        <div className='Modifier-Values'>
          <RangeMod />
          <DamageMod />
        </div>
      </header>
    </div>
  );
}

export default App;
