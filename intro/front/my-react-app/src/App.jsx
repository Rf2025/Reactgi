
import './App.css'
import React,{useState} from 'react'
import { useState } from 'react'

const App = () => {
  const [people, setPeople] = useState([
    { name: 'ironman', age: 42 },
    { name: 'warmachine', age: 44 },
    { name: 'thor', age: 39},
  ]);

  return (
    <div>
      <h1>Contact List</h1>
      {people.map((person, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h2>{person.name}</h2>
          <p>Age: {person.age}</p>
          <p>Email: {person.email}</p>
        </div>
      ))}
    </div>
  );

};


export default App
