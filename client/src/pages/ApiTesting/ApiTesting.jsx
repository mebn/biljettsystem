import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ApiTesting.css';
import PeopleTable from '../../components/PeopleTable/PeopleTable';



const ApiTesting = () => {

    const [people, setPeople] = useState([]);
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const getPeople = async () => {
        try {
          const response = await fetch("https://localhost:5000/api/people");
          const data = await response.json();
    
          setPeople(data);
        } catch (err) {
          console.error(err.message);
        }
      };

      const postPerson = async (e) => {
        e.preventDefault();
        try {
            // Add axios code here!
        } catch (err) {
            console.error(err.message);
        }
      }
    
      useEffect(() => {
        getPeople();
      }, []);


    return(
        <div>
            <h1>API Testing Page</h1>
            <div className='main-container'>
                <PeopleTable people={people} getPeople={getPeople} />
                <form className='post-form'>
                    <label htmlFor='first-name'>First Name</label>
                    <input 
                        className='first-name' 
                        placeholder='Joe'
                        value={firstName} 
                        onChange={e =>setFirstName(e.target.value)}
                    />
                    <label htmlFor='last-name'>Last Name</label>
                    <input 
                        className='last-name'
                        placeholder='Biden'
                        value={lastName} 
                        onChange={e =>setLastName(e.target.value)}
                    />
                    <button onClick={(e) => postPerson(e)}>Add Person</button>
                </form>
            </div>
        </div>
    )
};

export default ApiTesting;
