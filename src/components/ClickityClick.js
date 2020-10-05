// Code ClickityClick Component Here
import React from 'react'

class ClickityClick extends React.Component{
    constructor(){
        super()
        this.state = {
            hasBeenClicked: false
        }
    }

    clickHandler = () => {
        const clicked = this.state.hasBeenClicked

        if(clicked === false){
            this.setState({
                hasBeenClicked: true
            })
        }else if(clicked === true){
            this.setState({
                hasBeenClicked: false
            })
        }
    }

    pText = () => {
        const clicked = this.state.hasBeenClicked
        if(clicked === false){
            return 'not'
        } else if(clicked === true){
            return
        }

    }
  render() {
    return (
      <div>
        <p>I have {this.pText()} been clicked!</p>
        <button onClick={this.clickHandler}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick