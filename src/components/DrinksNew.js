import React from 'react'
import axios from 'axios'

import DrinkForm from './DrinkForm'

class DrinksNew extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        color: '',
        alcoholic: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('/api/drinks', {
        ...this.state.data
      })
      .then(() => this.props.history.push('/drinks'))
      .catch(err => alert(err.message))
  }

  render() {
    return(
      <main className="section">
        <div className="container">
          <DrinkForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </main>
    )
  }
}

export default DrinksNew
