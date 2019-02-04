import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    axios.get('/api/drinks')
      .then(res => this.setState({ drinks: res.data.drinks}))
      .catch(err => err.errors)
  }

  render() {
    console.log(this.state)
    if (!this.state.drinks) return null
    return(
      <div>
        <h1>Hello World</h1>

        <div className="columns is-multiline">
          {this.state.drinks.map(drink => (
            <div className="column is-one-quarter" key={drink._id}>
              <p>{drink.name}</p>
            </div>
          ))}
        </div>

      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
