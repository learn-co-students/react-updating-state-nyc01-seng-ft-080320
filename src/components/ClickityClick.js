import React from 'react';

class ClickityClick extends React.Component {

    state = {
        clicked: false
    }

    clickHandler = () => {
        this.setState(previousState => { 
            return {
                clicked: !previousState.clicked}
        })
    }

    render() {
        console.log("clicked``", this.state.clicked)
        return (
            <div>
                <p>I have {this.state.clicked ? null : 'not'} been clicked!</p>
                <button onClick={this.clickHandler}>Click me!</button>
            </div>
        );
    }
}

export default ClickityClick;