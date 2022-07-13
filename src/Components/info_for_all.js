import React from 'react';
import { Link } from 'react-router-dom';

const InfoForAll = () => {
//console.log(props)
  return (
    <div>
      Info page  <br/>
      <Link to="/profile">Bring me to /profile ...</Link> 
    </div>
  );
};

export default InfoForAll;