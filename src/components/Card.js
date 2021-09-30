import React from 'react';
import './Card.css';

const Card = ({name, username, id}) => {
    // const {name,email, id} = props;
    const twitterurl = `https:www.twitter.com/${username}`;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='pic' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <div >
                    <img alt='twitter' className='twittericon' src='https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png'/>
                    <a href={twitterurl}>{username}</a>
                </div>
            </div>
        </div>
    );
}

export default Card;
