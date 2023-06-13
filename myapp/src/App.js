import "./styles.css";
import ImageColumnLeft from './ImageColumnLeft.js';
import ImageColumnRight from './ImageColumnRight.js';
import Project from './Project.js';
import Title from './Title.js';
import Navbar from './Navbar.js';
import { AppProvider } from './AppContext';


export default function App() {
  return (
    <div className="App">
          <AppProvider>
      <Navbar />
      <Title />
 <ImageColumnLeft />
 <ImageColumnRight />
<div id="column">
  <Project />
  
</div>
</AppProvider>
    </div>
  );
}