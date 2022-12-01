import React, { useState } from 'react';
import { Select, Button } from 'antd';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getDataList } from '../selectors/app';
import { 
  getFilterData as getFilterDataRequest,
  getData as getDataRequest
 } from '../actions/app';

import locationOption from '../dummy/locationOption.json';
import priceOption from '../dummy/priceOption.json';
import typeOption from '../dummy/typeOption.json';
import dateOption from '../dummy/dateOption.json';

function Filterbar(props) {
  const { getFilterData, data } = props;
  const [filter, setFilter] = useState({address: "", date: "", price: "", type: ""});

  const handleSearch = function(){
    let tmp = {
      data: data,
      filter: filter
    }

    getFilterData(tmp);
  }

  return (
    <div className='filterbar__container'>
      <div className="filterbar">
        <div className='filterbar__option'>
        <p>Location</p>
        <Select
          showSearch
          className='filterbar__select'
          placeholder="Slect Location"
          onChange={(val) => setFilter({...filter, address: val})}
          options={locationOption}
        />
        </div>
        <div className="filterbar__divider">&nbsp;</div>

        <div className='filterbar__option'>
        <p>When</p>
        <Select
          showSearch
          className='filterbar__select'
          placeholder="Select Move-in Date"
          onChange={(val) => setFilter({...filter, date: val})}
          options={dateOption}
        />
        </div>
        <div className="filterbar__divider">&nbsp;</div>

        <div className='filterbar__option'>
        <p>Price</p>
        <Select
          showSearch
          className='filterbar__select'
          placeholder="Slect Price Range"
          onChange={(val) => setFilter({...filter, price: val})}
          options={priceOption}
        />
        </div>
        <div className="filterbar__divider">&nbsp;</div>

        <div className='filterbar__option'>
        <p>Property Type</p>
        <Select
          showSearch
          className='filterbar__select'
          placeholder="Slect House Type"
          onChange={(val) => setFilter({...filter, type: val})}
          options={typeOption}
        />
        </div>
        <div className="filterbar__divider">&nbsp;</div>

        <div className='filterbar__option'>
          <Button className='filterbar__btn' onClick={handleSearch}>Search</Button>
        </div>
        
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  data: getDataList()
});

const mapDispatchToProps = (dispatch) => ({
  getFilterData: (data) => dispatch(getFilterDataRequest(data)),
  getData: (data) => dispatch(getDataRequest(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filterbar);