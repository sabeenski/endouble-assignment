import React, { Component } from 'react';
import './App.css'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import JobPage from './components/JobPage';
import Footer from './components/Footer';
import JobForm from './components/JobForm';

class App extends Component {
 render() {
   return (

    <div className="App">
      <Navbar />
      <main className="container">
        <Route exact path='/' component={ JobPage } />
        <Route exact path='/careers/purchasing-assistant' component={ JobForm } />        
      </main>
       <Footer />
     </div>
   );
 }
}

export default App;
