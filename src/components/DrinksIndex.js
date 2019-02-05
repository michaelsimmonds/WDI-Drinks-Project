import React from 'react'
import axios from 'axios'

class DrinksIndex extends React.Component{
  constructor() {
    super()

    this.state = {
      drinks: []
    }
  }

  componentDidMount() {
    axios.get('/api/drinks')
      .then(res => this.setState({ drinks: res.data.drinks}))
      .catch(err => err.errors)
  }

  render() {
    console.log(this.state)
    return (<div className="section">
      <h1 className="title">Drinks</h1>

      
      <div className="columns is-multiline">
        {this.state.drinks.map(drink => (
          <div className="column is-one-quarter" key={drink._id}>
            <p>{drink.name}</p>
            <p>Color: {drink.color}</p>
          </div>
        ))}
      </div>

    </div>
    )
  }
}

export default DrinksIndex
