import React, { Component } from 'react'

class List extends Component {
  render() {
    const eachItem = this.props.eachItem
    console.log(eachItem)

    return (
      <div>
        <ul>
          {eachItem.map(item => {
            return <li key={item.id}>{item.value}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default List
