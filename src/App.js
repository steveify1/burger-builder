import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuiler';

function App() {
  return (
    <div className="App">
      {/* The App's core layout */}
      <Layout>
        {/* Burger builder page */}
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
