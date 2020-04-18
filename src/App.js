import React from 'react';
import './App.css';
import Profile from './profile/profile';
import image from './assets/Image/thumbnail.jpg'
import  './profile/profile.css'

const data=[{fullname:"mariem Aissa",profession:"developpeuse fullStack",bio:"biologie"}]

function App() {
  return (
    <React.Fragment>
      <Profile data={data} >
            <img className="round" src={image}/>
        </Profile>
    </React.Fragment>
  );
}

export default App;
