import './App.css';
import ButtonAppBar from "./components/searchbar"
// import CustomizedTimeline from "./components/body"
import wineme from "./wineme.png"
import AppFooter from "./components/footer"

function App() {
  return (
    <div>
      
     <ButtonAppBar />
     
    <div>
   <img className= "wineme" src={wineme} alt="wineme" />
<AppFooter />
    </div>
  
     
 
    
    </div>
  );
}

export default App;
