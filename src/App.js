import React, {useState, useEffect} from 'react';
import './App.css';
import Info from './Face';
import Timeline from './Timeline';
import Network from './Social.js'


const App = () => {

  
  const [profiles, setProfile] = useState([]);
  const [experiences, setExperience] = useState([]);
  
   
   useEffect(() => {

   getProfile()

   },[]);

 

  const getProfile = async () => {
   
    const response = await fetch(
      'https://lisboaitest.herokuapp.com/profiles'
    );
    const data = await response.json();

    
  
    setProfile(data)
    setExperience(data[0].experiences)
  
  }


  return(
  <div>
    
    {profiles.map((profile) => 
    
    <Info 
    key={profile.name}
    name={profile.name}
    description={profile.short_description} 
    photo ={profile.image} 
    />
    )
  }

    
  <Timeline data = {experiences}/>
 
        
 

        
             

           

     
    
    

    

  
  
  <Network/>

  </div> 

  );



}

export default App;



