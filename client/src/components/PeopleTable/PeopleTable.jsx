import React, {Fragment, useEffect, useState} from 'react'
import "./PeopleTable.css"

import {BsFillTrashFill} from "react-icons/bs"
import {BsFillPencilFill} from "react-icons/bs"


const PeopleTable = ({people, getPeople}) => {

    return (
        <Fragment>
        {" "}
        <table className="table mt-2 text-center small">
          <thead>
            <tr>
              <th>Person ID</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => (
                <tr key={person.id}>
                  <td>{person.id}</td>
                  <td>{person.firstName}</td>
                  <td>{person.lastName}</td>
                  <td><button className="editBtn"><BsFillPencilFill/></button><button className="deleteBtn"><BsFillTrashFill /></button></td>
                </tr>
              ))}
          </tbody>
        </table>
      </Fragment>
    )
}

export default PeopleTable