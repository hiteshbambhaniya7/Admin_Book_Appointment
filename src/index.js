import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from './home_page';
import Appointments from './appointments';
import Doctors from './Doctors';
import Assistants from './assistants';
import EditAccount from './edit_account';

function MyRoute() {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route index element={<HomePage />} />
        
        <Route path="/appointment" element={<Appointments />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/assistants" element={<Assistants />} />
        <Route path="/edit-account" element={<EditAccount />} />

      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyRoute />
);
