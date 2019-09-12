import React, { Component } from 'react'
import List from './List'

class Challenge extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newItem: '',
      list: []
    }

    this.addItem = this.addItem.bind(this)
  }

  addItem(e) {
    const newItem = {
      id: Date.now(),
      value: document.getElementById('input').value
    }

    this.state.list.push(newItem)
    // console.log(this.state.list)
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h3>To-Do</h3>
        <form>
          <input type='text' placeholder='New' id='input'></input>
          <button type='submit' onClick={this.addItem}>
            +
          </button>
        </form>
        <div>
          <List eachItem={this.state.list} />
        </div>
      </div>
    )
  }
}

export default Challenge
