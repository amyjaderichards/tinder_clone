import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Person from './components/Person';
import Lonely from './components/Lonely';
import data from './data.json';


const App = () => {
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [superlikedUsers, setSuperlikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const activeUser = 0;

  const removePersonFromDataSrc = (peopleSource, userId) => peopleSource.filter(user => user.id !== userId);

  const modifySuperficialChoices = (userId, action) => {
    const newPeople = [...people];
    const newLikedUsers = [...likedUsers];
    const newSuperlikedUsers = [...superlikedUsers];
    const newDislikedUsers = [...dislikedUsers];

    switch(action) {
      case 'ADD_TO_LIKED_USERS':
        if (!people[activeUser].likedUsers.includes(userId)) {
          newPeople[activeUser].likedUsers.push(userId);
          newLikedUsers.push(data[userId]);

          setLikedUsers(newLikedUsers);
          setPeople(removePersonFromDataSrc(people, userId));
        }
        break;
      
      case 'ADD_TO_DISLIKED_USERS':
        if (!people[activeUser].dislikedUsers.includes(userId)) {
          newPeople[activeUser].dislikedUsers.push(userId);
          newDislikedUsers.push(data[userId]);

          setDislikedUsers(newDislikedUsers);
          setPeople(removePersonFromDataSrc(people, userId));
        }
        break;

      case 'ADD_TO_SUPERLIKED_USERS':
        if (!people[activeUser].superlikedUsers.includes(userId)) {
          newPeople[activeUser].superlikedUsers.push(userId);
          newSuperlikedUsers.push(data[userId]);

          setSuperlikedUsers(newSuperlikedUsers);
          setPeople(removePersonFromDataSrc(people, userId));
        }
        break;
      default:
        return people;
    }
  }

  return (
    <div className="app">
      <Header />
      {people[1] ? (
        <Person
          key={people[1].id}
          person={people[1]}
          modifySuperficialChoices={modifySuperficialChoices}
          likedUsers={likedUsers}
        />
      ): (
        <Lonely 
          activeUserImage={people[activeUser].image}
          likedUsers={likedUsers}
          superlikedUsers={superlikedUsers}
        />
      )}
    </div>
  );
}

export default App;
