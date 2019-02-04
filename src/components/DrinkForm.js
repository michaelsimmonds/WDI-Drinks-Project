import React from 'react'

const DrinkForm = ({ data, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>

      <div className="field">
        <label className="label">Drink Name</label>
        <div className="control">
          <input
            className="input"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={data.name}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Color</label>
        <div className="control">
          <input
            className="input"
            placeholder="Color"
            name="color"
            onChange={handleChange}
            value={data.color}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Alcoholic</label>
        <div className="control">
          <input
            className="input"
            placeholder="Alcoholic (true or false)"
            name="alcoholic"
            onChange={handleChange}
            value={data.alcoholic}
          />
        </div>
      </div>

      <button>Submit</button>

    </form>
  )
}

export default DrinkForm
