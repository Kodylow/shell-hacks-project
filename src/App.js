import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './views/Home';
import './global-styles/index.scss';
import { useState, useEffect } from 'react';

function App() {
  const [headerUnderJumbo, setHeaderUnderJumbo] = useState(false);

  const handleScroll = () => {
    if (headerBottomPosition() >= jumboBottomPosition() - 30) {
      setHeaderUnderJumbo(true);
    } else {
      setHeaderUnderJumbo(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/">
          <div className="App">
            <Home headerUnderJumbo={ headerUnderJumbo } />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

const jumboBottomPosition = () => {
  const jumbo = document.getElementById('jumbo');
  if (jumbo) {
    return jumbo.offsetTop + jumbo.offsetHeight;
  }
  return null;
};

const headerBottomPosition = () => {
  const header = document.getElementById('header');
  if (header) {
    return window.scrollY + header.offsetHeight;
  }
  return null;
};

export default App;
