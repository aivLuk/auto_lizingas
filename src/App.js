import React, { Component } from 'react';
import './App.css';
import Introduction from './components/Introduction/Introduction';
import Nav from './components/Nav/Nav';
import Question1 from './components/Question1/Question1';
import Question2 from './components/Question2/Question2';
import Question3 from './components/Question3/Question3';
import Question4 from './components/Question4/Question4';
import Summary from './components/Summary/Summary';

class App extends Component {
  state = {
    questions: [
      { valueFirst: '8000' },
      { valueSecond: '1' },
      { valueThird: '10' },
      { valueFourth: '3' }
    ],
    q1Show: true,
    q2Show: false,
    q3Show: false,
    q4Show: false
  }

  q4BtnBackHandler = () => {
    this.setState({
      questions: [...this.state.questions],
      q1Show: false,
      q2Show: false,
      q3Show: true,
      q4Show: false
    })
  }
  q4BtnForwardHandler = () => {
    this.setState({
      questions: [...this.state.questions],
      q1Show: false,
      q2Show: false,
      q3Show: false,
      q4Show: false,
      summaryShow: true,
      navNotShow: true
    })
  }
  q3BtnBackHandler = () => {
    this.setState({
      questions: [...this.state.questions],
      q1Show: false,
      q2Show: true,
      q3Show: false,
      q4Show: false
    })
  }
  q3BtnForwardHandler = () => {
    this.setState({
      questions: [...this.state.questions],
      q1Show: false,
      q2Show: false,
      q3Show: false,
      q4Show: true
    })
  }
  q2BtnBackHandler = () => {
    this.setState({
      questions: [...this.state.questions],
      q1Show: true,
      q2Show: false,
      q3Show: false,
      q4Show: false
    })
  }
  q2BtnForwardHandler = () => {
    this.setState({
      questions: [...this.state.questions],
      q1Show: false,
      q2Show: false,
      q3Show: true,
      q4Show: false
    })
  }
  q1BtnHandler = () => {
    this.setState({
      questions: [...this.state.questions],
      q1Show: false,
      q2Show: true,
      q3Show: false,
      q4Show: false
    })
  }
  priceChangedHandler = (e) => {
    this.setState({
      questions: [
        { valueFirst: e.target.value },
        { valueSecond: this.state.questions[1].valueSecond },
        { valueThird: this.state.questions[2].valueThird },
        { valueFourth: this.state.questions[3].valueFourth }
      ],
      q1Show: this.state.q1Show,
      q2Show: this.state.q2Show,
      q3Show: this.state.q3Show,
      q4Show: this.state.q4Show
    })
  }
  yearsChangedHandler = (e) => {
    this.setState({
      questions: [
        { valueFirst: this.state.questions[0].valueFirst },
        { valueSecond: e.target.value },
        { valueThird: this.state.questions[2].valueThird },
        { valueFourth: this.state.questions[3].valueFourth }
      ],
      q1Show: this.state.q1Show,
      q2Show: this.state.q2Show,
      q3Show: this.state.q3Show,
      q4Show: this.state.q4Show
    })
  }
  baseChangedHandler = (e) => {
    this.setState({
      questions: [
        { valueFirst: this.state.questions[0].valueFirst },
        { valueSecond: this.state.questions[1].valueSecond },
        { valueThird: e.target.value },
        { valueFourth: this.state.questions[3].valueFourth }
      ],
      q1Show: this.state.q1Show,
      q2Show: this.state.q2Show,
      q3Show: this.state.q3Show,
      q4Show: this.state.q4Show
    })
  }
  percentageChangedHandler = (e) => {
    this.setState({
      questions: [
        { valueFirst: this.state.questions[0].valueFirst },
        { valueSecond: this.state.questions[1].valueSecond },
        { valueThird: this.state.questions[2].valueThird },
        { valueFourth: e.target.value }
      ],
      q1Show: this.state.q1Show,
      q2Show: this.state.q2Show,
      q3Show: this.state.q3Show,
      q4Show: this.state.q4Show
    })
  }

  render() {

    return (
      <div className="App">
        <Introduction />
        {this.state.navNotShow ? null : <Nav
          q1show={this.state.q1Show}
          q2show={this.state.q2Show}
          q3show={this.state.q3Show}
          q4show={this.state.q4Show} />}
        {this.state.q1Show ? <Question1
          val={this.state.questions[0].valueFirst}
          clicked={this.q1BtnHandler}
          changed={this.priceChangedHandler} /> : null}
        {this.state.q2Show ? <Question2
          val={this.state.questions[1].valueSecond}
          clickedContinue={this.q2BtnForwardHandler}
          clickedBack={this.q2BtnBackHandler}
          changed={this.yearsChangedHandler} /> : null}
        {this.state.q3Show ? <Question3
          valTotal={this.state.questions[0].valueFirst}
          val={this.state.questions[2].valueThird}
          clickedContinue={this.q3BtnForwardHandler}
          clickedBack={this.q3BtnBackHandler}
          changed={this.baseChangedHandler} /> : null}
        {this.state.q4Show ? <Question4
          val={this.state.questions[3].valueFourth}
          clickedContinue={this.q4BtnForwardHandler}
          clickedBack={this.q4BtnBackHandler}
          changed={this.percentageChangedHandler} /> : null}
        {this.state.summaryShow ? <Summary
          valFirst={this.state.questions[0].valueFirst}
          valSecond={this.state.questions[1].valueSecond}
          valThird={this.state.questions[2].valueThird}
          valFourth={this.state.questions[3].valueFourth} /> : null}
      </div>
    );
  }
}

export default App;
