import React from 'react'
import styles from './App.css'

export default class App extends React.Component {

  render() {
    return (
      <div className={styles.root}>
        {this.props.children}
      </div>
    )
  }
}
