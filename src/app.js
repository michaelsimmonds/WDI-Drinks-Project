import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import 'bulma'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import DrinksIndex from './components/DrinksIndex'
import DrinksNew from './components/DrinksNew'

class App extends React.Component {

  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/drinks/new" component={DrinksNew} />
          <Route path="/drinks" component={DrinksIndex} />
          <Route path="/" component={DrinksIndex} />

        </Switch>
      </BrowserRouter>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
//
// console.log(this.state)
// if (!this.state.drinks) return null


// constructor() {
//   super()
//
//   this.state = {}
// }

// componentDidMount() {
//   axios.get('/api/drinks')
//     .then(res => this.setState({ drinks: res.data.drinks}))
//     .catch(err => err.errors)
// }
