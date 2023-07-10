import React, { useState } from 'react';
import './App.css';            //importing our css file
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Switch, Routes, Route, Link } from 'react-router-dom';

// import SideBar from './components/SideBar';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      mesg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  function funToggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode has been enabled.", "Success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "Success");
    }
  }

  return (
    <>
      <Navbar title="Text Utils" mode={mode} toggleMode={funToggleMode} />

      <Alert alert={alert} />       {/* here {alert} is the name of state that we created */}



      <TextForm mode={mode} showAlert={showAlert} />
      {/* <About mode={mode} /> */}
    </>
  );
}

export default App;



