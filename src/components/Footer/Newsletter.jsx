import React from 'react';

import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';
import { Button } from '../../container';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title='Newsletter'/>
      <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
      <p className='p__opensans'>And Never Miss Latest Updates!</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type='email' placeholder='Enter your e-mail address'/>
      <Button title='Subscribe'/>
    </div>
  </div>
);

export default Newsletter;
