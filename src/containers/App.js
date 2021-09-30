import React, {Component} from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

// Smart component because it has state. Smart components tend to have the class syntax.
class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
        console.log('constructor');
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
            .then(users => {this.setState({ robots: users})}
        );
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        // if large amount of users and gonna take time, do this if statement.
        return !robots.length ?
        <h1>Loading</h1> :
        (
                    <div className='tc'>
                        <h1>RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                            <ErrorBoundary>
                                <CardList robots={filteredRobots}/>
                            </ErrorBoundary>
                        </Scroll>
                    </div>
        );
    } 
}

export default App;

// STATE = an object that describes your application. example: robots.
// PROPS = things that come out of STATE
// parent feeds STATE into a child component and as soon as a child component receives the STATE, it a property (prop).
// Child component can never change the property.