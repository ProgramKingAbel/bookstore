import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Books, Categories } from './Pages';
import { Layout } from './components';
import './styles/App.css';

const App = () => (

  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Books />} />
      <Route path="Categories" element={<Categories />} />
    </Route>
  </Routes>

);

export default App;
