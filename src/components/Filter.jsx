import React from 'react';
import { connect } from 'react-redux';
import { updateQuery } from '../redux/people/actions';

function Filter(props) {
  function handleInputChange(x) {
    const newQuery = x.target.value;
    props.updateQuery(newQuery);
  }

  return (
    <div className='App-box'>
      <input type='text' placeholder='Filter' onChange={handleInputChange}/>
    </div>
  );
}

Filter.propTypes = {
  
};

export default connect(null, { updateQuery })(Filter);
