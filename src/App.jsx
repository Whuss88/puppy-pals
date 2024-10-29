import React from 'react';

import { puppyList } from './data.js';

export const App = () => {
  console.log(puppyList);

  return (
    <div>
      <h1>Puppy List</h1>
      <ul>
        {puppyList.map((puppy, index) => (
          <li key={index}>{puppy.name}</li>
        ))}
      </ul>
    </div>
  );
};

