import React from 'react';

const WelcomeMessage = (props) => {
  return <h1>Welcome, {props.name}!</h1>;
};

const App = () => {
  return <WelcomeMessage name="John" />;
};

export default App;
