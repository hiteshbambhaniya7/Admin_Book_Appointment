import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './home_page';
import Appointments from './appointments';
import Doctors from './Doctors';
import Assistants from './assistants';
import EditAccount from './edit_account';

function MyRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        
        <Route path="/appointment" element={<Appointments />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/assistants" element={<Assistants />} />
        <Route path="/edit-account" element={<EditAccount />} />

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyRoute />
);
