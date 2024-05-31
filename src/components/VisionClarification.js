import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import './VisionClarification.css';

const VisionClarification = () => {
  const [entities, setEntities] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    axios.get('https://entities-alpha.vercel.app/entity_details')
      .then(response => {
        const selectedEntities = response.data.slice(0, 16); 
        setEntities(selectedEntities);
      })
      .catch(error => {
        console.error('Error fetching the entity details:', error);
      });
  }, []);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <div className="vision-clarification-container">
      <div className="vision-clarification">
        {entities.map((entity, index) => (
          <Card 
            key={index} 
            name={entity.name} 
            snippet={entity.snippet} 
            isSelected={index === selectedCard} 
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
      <button className="next-button">Next</button>
    </div>
  );
};

export default VisionClarification;
