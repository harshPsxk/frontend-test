import React from 'react';
import './Card.css';

const Card = ({ name, snippet, isSelected, onClick }) => {
  return (
    <div className={`card ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <h2>{name}</h2>
      <p>{snippet}</p>
    </div>
  );
};

export default Card;
