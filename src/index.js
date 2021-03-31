import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Game } from './components/game'
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route path="/" component={Game}/>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
