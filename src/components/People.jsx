import React, { useMemo } from "react";
import { connect } from "react-redux";

function People(props) {
  const filterPeople = (people, query) => {
    if (!query) {
      return people;
    }

    const lowercaseQuery = query.toLowerCase();

    return people.filter((person) =>
      person.name.toLowerCase().includes(lowercaseQuery)
    );
  };

  const renderPeople = () => {
    const filteredPeople = filterPeople(props.people, props.query);

    return filteredPeople.map((person) => {
      return (
        <div className="App-box" key={person.id}>
          {person.name}
        </div>
      );
    });
  };

  return <div>{renderPeople()}</div>;
}

const mapStateToProps = (state) => {
  return {
    people: state.people.list,
    query: state.people.query,
  };
};

People.propTypes = {};

export default connect(mapStateToProps)(People);
