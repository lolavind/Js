import React, { useEffect, useState } from 'react';

const promotionalItems = [
  {
    id: 1,
    image: 'https://via.placeholder.com/300x200.png?text=Product+1',
    description: 'Super Sale on Product 1!',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300x200.png?text=Product+2',
    description: 'Limited Time Offer on Product 2!',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/300x200.png?text=Product+3',
    description: 'Buy 1 Get 1 Free on Product 3!',
  },
];

function Randomizer() {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * promotionalItems.length);
    setSelectedItem(promotionalItems[randomIndex]);
  }, []);

  if (!selectedItem) return null;

  return (
    <div className="container">
      <img src={selectedItem.image} alt={`Product ${selectedItem.id}`} />
      <p>{selectedItem.description}</p>
    </div>
  );
}

export default Randomizer;
