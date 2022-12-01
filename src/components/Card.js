import React from 'react';
import { Col } from 'antd';
import { HeartOutlined, AppleOutlined, HeatMapOutlined, WarningOutlined } from '@ant-design/icons';

export default function Card(props) {
  const { value } = props;

  const getPrice = function(price){
    let tmp = price.toString();
    let count = 0, res = "";

    for(let i=tmp.length-1;i>=0;i--){
      if(count == 3){
        res+=","+tmp[i];
        count = 0;
      }
      else {
        res+=tmp[i];
        count++;
      }
    }

    return res.split("").reverse().join("");
  }

  return (
    <Col span={8}>
      <div className="card">
        <div className="card__img">
          <img src={`https://source.unsplash.com/random?${value.id}`} alt="" />
        </div>
        <div className="card__body">
          <div className="card__price">
            <p>${getPrice(value.price)} <span>/month</span></p>
            <HeartOutlined className='card__like' />
          </div>
          <div className="card__name">
            {value.name}
          </div>
          <div className="card__address">
            <p>{value.address}</p>
            <p>{value.type}</p>
          </div>
          <div className="card__address">
            <p>{value.date}</p>
          </div>
          <div className="card__divider">&nbsp;</div>
          <div className="card__footer">
            <p><AppleOutlined /> 3 Beds</p>
            <p><HeatMapOutlined /> 2 Bathrooms</p>
            <p><WarningOutlined /> 6 x 7.5 m<sup>2</sup></p>
          </div>
        </div>
      </div>
    </Col>
  )
}