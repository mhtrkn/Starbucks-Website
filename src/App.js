import React from 'react';
import './App.css';
import Header from './components/header'
import poster from './assets/starbucks.png'

function App() {
  return (
    <section>
      <div className="App">
        <Header />
        <div class="content">
          <div class="textBox">
            <h2>It's not just Coffee <br /> It's <span>Starbucks</span></h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit molestiae modi fuga dolor soluta ad ab laborum
              cumque, deserunt maiores, maxime,laudantium consequatur
              ipsam placeat impedit. Non perspiciatis praesentium eveniet. </p>
            <button class="learn-more">Learn More</button>
          </div>
          <div class="imgBox">
            <img src={poster} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
