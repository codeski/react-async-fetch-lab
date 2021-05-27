// create your App component here
import React from 'react'

class App extends React.Component {

    state = {
        people: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => this.setState(data))
    }

    render(){
        // return this.state.people.map(person => <h3 key={person.name}>{person.name}</h3>)
    }
}

export default App