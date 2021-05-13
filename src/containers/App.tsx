import './App.css';
import Header from '../components/Header/Header';
import ProjectCarousel from '../components/ProjectCarousel/ProjectCarousel';
import {useState, useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="ATFContent">
        <p>
          Hi my name is Dillon! I'm a freelance full-stack web developer and have built websites using the latest and greatest tools and libraries, such as <br/>
          <br/>
          -Reactjs -NextJS -HTML5 -CSS<br/>
          -Javascript -Typescript<br/>
          -Nodejs -Express -Docker -AWS -Load Balancing<br/>
          -MongoDB -Redis -PostgreSQL<br/>
          -Continuous Integration -Continuous Deployment<br/>
          <br/>
          and more. I am efficient, hard working and always ready to learn.<br/>
          If you are interested in hiring me, please contact me via one of the options above.<br/>
        </p>
      </div>
      <div id="linkContainer">
        <a className="certificateLink" href="https://ik.imagekit.io/zkncx93xu/UdemyCertificate_public__hknniNTo2s.jpg" target="_blank">Certificate #1</a>
        <a className="certificateLink" href="https://ik.imagekit.io/zkncx93xu/UdemyCertificate2_public__L3k0RbpbT.jpg" target="_blank">Certificate #2</a>
      </div>
      <ProjectCarousel projectGridSize={1}/>
      <footer></footer>
    </div>
  );
}

export default App;
