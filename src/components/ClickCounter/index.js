// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onClicked = () => {
    this.setState(prevstate => ({count: prevstate.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <h1>
          The Button has been clicked <span className="span">{count}</span>
          times
        </h1>
        <p>Click the button to increase the count!</p>
        <button type="button" onClick={this.onClicked}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
