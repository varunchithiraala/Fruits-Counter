// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}

  onClickMangoesCountIncrement = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  onClickBananasCountIncrement = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="fruits-counter-bg-container">
        <div className="fruits-counter-container">
          <h1 className="fruits-counter-heading">
            Bob ate <span className="fruits-counter">{mangoesCount} </span>
            mangoes <span className="fruits-counter">{bananasCount} </span>
            bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="fruit-img"
                alt="mango"
              />
              <div className="button-container">
                <button
                  className="eat-button"
                  onClick={this.onClickMangoesCountIncrement}
                  type="button"
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="fruit-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="fruit-img"
                alt="banana"
              />
              <div className="button-container">
                <button
                  className="eat-button"
                  onClick={this.onClickBananasCountIncrement}
                  type="button"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
