import React, {useState, useEffect} from 'react';
import './App.css';
import Info from './Face';
import Network from './Social.js'

const App = () => {

  
  const [profiles, setProfile] = useState([]);
  
   
   useEffect(() => {

   getProfile()

   },[]);

 
  const getProfile = async () => {
   
    const response = await fetch(
      'https://lisboaitest.herokuapp.com/profiles'
    );
    const data = await response.json();
    setProfile(data)
  }

  return(
  <div>
    
    {profiles.map(profile => ( 
    <Info
    name={profile.name}
    description={profile.short_description} 
    photo ={profile.image} 
    />
    ))}

  <Network/>

  </div> 

  );



}

export default App;



