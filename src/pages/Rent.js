import React, { useEffect } from 'react';
import Filterbar from '../components/Filterbar';
import Grid from '../components/Grid';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getData as getDataRequest } from '../actions/app';

function Rent(props) {
  const { getData, filterData } = props;

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='rent__container'>
      <div className="rent">
        <h1>Search properties to rent</h1>
        <Filterbar />
        <br />
        <br />
        <Grid filterData={filterData} />
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = (dispatch) => ({
  getData: (data) => dispatch(getDataRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rent);