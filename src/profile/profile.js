import React from 'react'
import PropTypes from 'prop-types';
import  './profile.css'


const Profile=(props)=>{
    const handleName=(props)=>{
        alert("User Name: "+props);
    }
            
    return(
        <React.Fragment>
            {props.data.map((item, i) => (
              <div className="card-container" key={i}>
                <span className="pro" onClick={()=>{handleName(item.fullname)}}>ALERT CLICK</span>
                <span className="img">{props.children}</span>
                <h3>{item.fullname}</h3>
                <h6>{item.profession}</h6>
                <p>{item.bio}</p>
            </div> 
          ))}
            
        </React.Fragment>
    );
}


Profile.defaultProps = {
    fullname:  "mariem",
    profession:"Developpeur",
    bio: "Nothing"
  };
  Profile.prototype={
    fullname:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string
  }

  
export default Profile