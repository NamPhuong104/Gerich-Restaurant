import React from 'react';

import {images} from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';
import './Header.css';
import { Button } from '../../container'

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper__info '>
      <SubHeading title='Chase the new flavour'/>
        <h1 className='app__header-h1'>The key to Find Dining</h1>
        <p className='p__opensans' 
        style={{margin: '30px 0'}}
        >Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus 
        </p>
        <Button title='Explore Menu'/>
    </div>

    <div className='app__wrapper__img'>
      <img src={images.welcome} alt='header img'/>
    </div>
  </div>
);

export default Header;
