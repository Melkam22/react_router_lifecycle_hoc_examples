import React from 'react';
import { useNavigate } from 'react-router-dom';


function Profile() {
  let navigate = useNavigate();
  return (
    <div>
      Profile page
       <button onClick={()=>navigate("/products")}>switch</button>
    </div>
  );
};



export default Profile;