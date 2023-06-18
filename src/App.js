// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';




function App() {
  const [isShow , setIsShow] = useState(false);
  function handleEntry(){
    console.log("handle entry")
    setIsShow(true)
  }
  function handleExit(){
    setIsShow(false)

  }
  return (
    <div className="App">
      {/* i am using some events here */}
      <label onMouseEnter={handleEntry} onMouseLeave={handleExit}>Hover over me</label>
      {isShow ? <div>Thanks for hovering! </div> : ""}
    </div>
  );

}


export default App;
 