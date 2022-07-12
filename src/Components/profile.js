import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function Profile() {
  let navigate = useNavigate();
  let {loggedName} = useParams();
  return (
    <div>
      Wel-come {loggedName} to your page! <br/>
       <button onClick={()=>navigate("/products")}>switch</button>
    </div>
  );
};



export default Profile;