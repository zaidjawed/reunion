import React from 'react';
import '../styles/navbar.scss';
import { Button } from "antd";
import { HomeOutlined } from '@ant-design/icons';

export default function Navbar() {
  return (
    <div className='navbar__container'>
      <div className="navbar">
        <div className="navbar__left">
          <a href="javascript:void(0)"><HomeOutlined className="navbar__logo" /> Estatery</a>
          <a href="javascript:void(0)">Rent</a>
          <a href="javascript:void(0)">Buy</a>
          <a href="javascript:void(0)">Sell</a>
        </div>
        <div className="navbar__right">
          <Button className='navbar__btn'>Login</Button>
          <Button className='navbar__btn navbar__btn--signup'>Signup</Button>
        </div>
      </div>
    </div>
  )
}