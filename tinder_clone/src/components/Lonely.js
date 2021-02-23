import React from 'react';
import LikedPerson from './LikedPerson';

const Lonely = ({activeUserImage, likedUsers, superlikedUsers}) => (
    <div id="lonely">
        <p>There's nobody new around you</p>

        <span className="pulse">
            <img src={`/images/users/${activeUserImage}`} alt="You..." />
        </span>

        <div id="like-people">
            <p>{likedUsers.length > 0 && "People you liked..."}</p>

            {likedUsers.map(item => (
                <LikedPerson key={item.id} person={item} />
            ))}

            <p>{superlikedUsers.length > 0 ? "People you superliked!" : ""}</p>

            {superlikedUsers.map(item => (
                <LikedPerson key={item.id} person={item} />
            ))}
        </div>
    </div>
)

export default Lonely;