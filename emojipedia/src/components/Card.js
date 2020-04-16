import React from 'react';


export default function Card(props){
  return (
    <div className="card">
      <span>{props.emoji}</span>
      <span className="title">{props.title}</span>
      <p>{props.description}</p>
    </div>

  );
}