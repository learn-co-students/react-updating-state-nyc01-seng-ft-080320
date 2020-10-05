// Code ClickityClick Component Here
import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      toggled: false,
      currentTheme: 'blue',
    };
  }
 
  handleClick = () => {
    this.setState(prevState => {
            return {
                hasBeenClicked: !prevState.hasBeenClicked
            }
        }
    )

    console.log('Not in CB: ', this.state.hasBeenClicked); // prints false
  };
 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
export default ClickityClick;