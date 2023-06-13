import "./styles.css";
import Project from './Project.js';
import Title from './Title.js';
import Navbar from './Navbar.js';


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
  <Project />
  
    </div>
  );
}