import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  
  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = (props)=>{
    console.log(props);
    if(props === 'greyMode'){
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
        showAlert("Dark Mode Enabled", "success");
      }else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode Enabled", "success");
      }
    } else if(props === 'blueMode'){
        if(mode === 'light'){
          setMode('black');
          document.body.style.backgroundColor = '#4c5dba';
          showAlert("Blue Dark Mode Enabled", "success");
        }else{
          setMode('light');
          document.body.style.backgroundColor = 'white';
          showAlert("Light Mode Enabled", "success");
        }
    }
  }

  return (
    <>
    <Router>
      <Navbar titleName="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container' my-3>
        <Routes>
              <Route exact path="/about" element={<About />}/>
              <Route exact path="/" element={<TextForm showAlert={showAlert} titleHeading='Enter Text to Analyze' mode={mode}/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
