import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
  padding: 10px 20px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 6px;
`

function App() {
  return (
    <div>
      App

      <Button>My Button</Button>
    </div>
  );
}

export default App;
