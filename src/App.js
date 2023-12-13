import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './components/Bar';
import Section from './components/Section';
import Footer from './components/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
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
          <Route path="/gh-pages-test/" element={<Home/>}/>
          <Route path="/gh-pages-test/info" element={<Info/>}/>
          <Route path="/gh-pages-test/store" element={<AStore/>}/>
          <Route path="/gh-pages-test/calendar" element={<Calendar/>}/>
          <Route path="/gh-pages-test/histories" element={<Histories/>}/>
          <Route path='/gh-pages-test/InfoAcademy' element={<InfoAcademy />}/>
          <Route path='/gh-pages-test/Sponsor' element={<Sponsor />}/>
          <Route path='/gh-pages-test/Author' element={<Author />}/>
          <Route path='/gh-pages-test/Admision' element={<Admision />}/>
          <Route path='/gh-pages-test/Schools' element={<Schools />}/>
          <Route path='/gh-pages-test/applyNow' element={<Apply />}/>
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
