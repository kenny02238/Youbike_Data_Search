import React, { useEffect, useState } from "react";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";
import { faker } from "@faker-js/faker";

export default function DataDisplay() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    setPeople(
      [...Array(100).keys()].map((key) => {
        return {
          id: key,
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          bio: faker.lorem.lines(Math.random() * 100),
        };
      })
    );
  }, []);
  return (
    <div>
        {console.log(people)}
      <List
        width={600}
        height={600}
        rowHeight={50}
        rowCount={people.length}
        rowRenderer={(key,index,style,parent) => {
            const person = people[index];
            return(
                <div key={key} style={style}>
                    <h2>{person}</h2>
                </div>
            )
        }}
      />
      {/* <ul>
        {console.log(people)}
        {people.map((person) => {
          return (
            <li key={person.id}>
              <h2>{person.name}</h2>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}
