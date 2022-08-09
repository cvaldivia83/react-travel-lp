import React from 'react';
import Card from './Card';
import data from '../data';

export default function Content() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        id={item.id}
        imageUrl={item.imageUrl}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        title={item.title}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
      />
    );
  })
  return (
    <div className="container">
      {cards}
    </div>
  )
}
