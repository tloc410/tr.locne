import '../css/App.css';
import Control from './control';
import Footer from "./footer";
import { BrowserRouter as Router} from "react-router-dom";
import DieuHuongURL from '../router/Dieuhuong';

function App(){
  return (
    <div className="App">
      <div className="home">
        <Router>
          <Control/>
          <DieuHuongURL />
          <Footer/>
        </Router>
      </div>
      
    </div>
  );
}

export default App;
