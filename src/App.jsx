import { useState } from 'react';
import './App.css';
import Data from './Data';
import Card from './Components/Card/Card';

const App = () => {
  return (
    <div className="product-list">
      {Data.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
          rate={product.rating.rate}
          count={product.rating.count}
        />
      ))}
    </div>
  );
};

// Export the App component
export default App;
