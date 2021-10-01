import React, {useState, useEffect} from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

// Smart component because it has state. Smart components tend to have the class syntax.
function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {setRobots(users)})
        console.log(count);
    },[count]); // only run if count changes.

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    // if large amount of users are gonna take time, do this if statement.
    return (!robots.length) ? <h1>Loading</h1> 
        : (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <button onClick={() => setCount(count+1)}>Click Me!</button>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
}

export default App;

// STATE = an object that describes your application. example: robots.
// PROPS = things that come out of STATE
// parent feeds STATE into a child component and as soon as a child component receives the STATE, it a property (prop).
// Child component can never change the property.