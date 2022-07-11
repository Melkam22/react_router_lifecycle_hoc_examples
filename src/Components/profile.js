import React from 'react';
import { Link } from 'react-router-dom';


const Profile = () => {
  console.log('profile')
  return (
    <div>
     <Link to="/profile">Bring me to /profile ...</Link> 
      
    </div>
  );
};

export default Profile;