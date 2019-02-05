import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './style.css'

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

import DrinksIndex from './components/DrinksIndex'
import DrinksNew from './components/DrinksNew'
import Home from './components/Home'

class App extends React.Component {

  render() {
    return(
      <BrowserRouter>
        <main>

          <nav className="navbar is-primary">
            <div className="container">
              <div className="navbar-start">
                <Link className="links" to="/"> Home </Link>
                <Link className="links" to="/drinks"> Drinks </Link>
                <Link className="links" to="/drinks/new"> Add Drink </Link>
              </div>
            </div>
          </nav>

          <Switch>
            <Route path="/drinks/new" component={DrinksNew} />
            <Route path="/drinks" component={DrinksIndex} />
            <Route path="/" component={Home} />

          </Switch>
        </main>
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
