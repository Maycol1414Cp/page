import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './components/Bar';
import Section from './components/Section';
import Footer from './components/Footer';
import { HashRouter,BrowserRouter,Route,Routes } from 'react-router-dom';
// pages
import Info from "./pages/Info.jsx"
import Calendar from './pages/Calendar';
import Histories  from './pages/Historie';
import AStore from "./pages/AStore"
import Home from './pages/Home';
import { Author } from './pages/Author.jsx';
import { Admision,Apply,InfoAcademy,Schools,Sponsor,Team } from './pages/Academy.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bar /> 
      </header>
      <div className="sections-container">
        <div className="left">
        <Routes>
          <Route path="./" element={<Home/>}/>
          <Route path="./info" element={<Info/>}/>
          <Route path="./store" element={<AStore/>}/>
          <Route path="./calendar" element={<Calendar/>}/>
          <Route path="./histories" element={<Histories/>}/>
          <Route path='./InfoAcademy' element={<InfoAcademy />}/>
          <Route path='./Sponsor' element={<Sponsor />}/>
          <Route path='./Author' element={<Author />}/>
          <Route path='./Admision' element={<Admision />}/>
          <Route path='./Schools' element={<Schools />}/>
          <Route path='./applyNow' element={<Apply />}/>
        </Routes>
        </div>
        <aside className="aside">
          <Section/>
        </aside>
      </div>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
