import './App.css';
import Header from '../components/Header/Header';
import ProjectCarousel from '../components/ProjectCarousel/ProjectCarousel';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="ATFContent">
        <p>
          Hi my name is Dillon! I'm a freelance full-stack web developer and have built websites using the latest and greatest tools and libraries, such as <br/>
          <br/>
          -React -NextJS -HTML5<br/>
          -Javascript -Typescript<br/>
          -Node -Express -Docker -AWS<br/>
          -MongoDB -Redis -PostgreSQL<br/>
          <br/>
          and more. I am efficient, hard working and always ready to learn.<br/>
          If you are interested in hiring me, please contact me via one of the options above.<br/>
        </p>
      </div>
      <ProjectCarousel />
      <footer></footer>
    </div>
  );
}

export default App;
