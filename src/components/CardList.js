import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardsArray = robots.map((user,i) => {
        return (<Card
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            username={robots[i].username}
            ecosystem={robots[i].ecosystem}/>);
    });
    return (
        <div>
            {cardsArray}
        </div>
    );
}

export default CardList;