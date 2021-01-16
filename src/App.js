import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
      <div className="menu">
    
        <Switch>
          <Route exact path="/" component={RegisterPageComponent} />
          <Route exact path="/home" component={Home} />
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
    </AppContainer>
   
</div>
  );
}

export default App;
