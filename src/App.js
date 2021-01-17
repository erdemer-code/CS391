import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import BookQuiz from './components/Quizes/BookQuiz'
import TheatersQuiz from './components/Quizes/TheatersQuiz'
import MusicQuiz from './components/Quizes/MusicQuiz'
import TvQuiz from './components/Quizes/TvQuiz'
import VideoGames from './components/Quizes/VideoGames'
import FilmQuiz from './components/Quizes/FilmQuiz'


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
      <div className="menu">
    
        <Switch>
          <Route exact path="/" component={RegisterPageComponent} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/quiz1" component={BookQuiz} />
          <Route exact path="/quiz2" component={FilmQuiz} />
          <Route exact path="/quiz3" component={MusicQuiz} />
          <Route exact path="/quiz4" component={TheatersQuiz} />
          <Route exact path="/quiz5" component={TvQuiz} />
          <Route exact path="/quiz6" component={VideoGames} />
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
