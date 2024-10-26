import React, { useEffect} from 'react';
import "./app.css";
import Home from "./pages/home/Home.jsx";
import ReactGA from 'react-ga4';

function App() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });

    // Optional: Enable IP anonymization
    ReactGA.set({ anonymizeIp: true });
    return () => {
      ReactGA.abort();
    };
  }, []);


  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App