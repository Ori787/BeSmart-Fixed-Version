import logo from './logo.svg';
import './App.css';
import LayoutComp from './App Layout/layout';
import { BrowserRouter } from 'react-router-dom';
import Router from './Routes/Router';
import { useState, useEffect } from 'react';
import useAutoLogin from './hooks/useAutoLogin';
import { LinearProgress } from "@mui/material";


const App = () => {
  const [doneAuth, setDoneAuth] = useState(false);
  const autoLogin = useAutoLogin();
  useEffect(() => {
    (async () => {
      try {
        await autoLogin(); 
      } catch (err) {
        console.log(err);
      } finally {
        setDoneAuth(true);
      }
    })();
  }, [autoLogin]);
  return (
     <div className="App">
    <BrowserRouter>
<LayoutComp>
{doneAuth ? <Router /> : <LinearProgress />}
</LayoutComp>
</BrowserRouter>
    </div>
  );
}

export default App;
