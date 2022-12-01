import React from 'react';
import { Row } from 'antd';
import Card from './Card';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getFilterDataList } from '../selectors/app';


function Grid(props) {
  const { filterData } = props;
  return (
    <Row gutter={24}>
      {filterData.map(val => <Card value={val} key={val.id} />)}
    </Row>
  )
}

const mapStateToProps = createStructuredSelector({
  filterData: getFilterDataList()
});
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);