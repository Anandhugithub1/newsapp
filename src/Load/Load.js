import React from 'react';
import {CircleLoader} from 'react-spinners';
import './Load.css';


const Load = ({ loading }) => {
  return (

    <div className='divs'>
              <CircleLoader color="#36D7B7" loading={loading} className='load ' />

    </div>
      
  
  );
};

export default Load;
