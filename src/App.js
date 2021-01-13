import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import MainPage from './components/mainPage'
import Footer from './components/footer'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
      <div className="menu">
        <ul>
          {/* <li>
            <Link to="/mainPage">MainPage</Link>
          </li> */}
          {/* <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li> */}
        </ul>
        <Switch>
          <Route exact path="/" component={RegisterPageComponent} />
          <Route exact path="/mainPage" component={MainPage} />
          {/* <Route exact path="/contact" component={Contact} /> */}
          {/* <Route path="*" component={NotFound} /> */}
        </Switch>
      </div>

    </BrowserRouter>
    )
  }
}




const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function RegisterPageComponent() {
  return (
    <div>
    <AppContainer>
      <AccountBox />
      <footer>
    <Footer/>
    </footer>
    </AppContainer>
   
</div>
  );
}

export default App;
