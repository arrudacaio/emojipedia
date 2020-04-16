import React from 'react';
import Card from './Card';
import emojipedia from '../emojipedia';

function getItem(emojiItem){
  return (
    <Card 
      id={emojiItem.id}
      emoji={emojiItem.emoji}
      title={emojiItem.title}
      description={emojiItem.description}
    />

  );
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(getItem)}
    </div>
  );
}

export default App;
