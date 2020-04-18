import React from 'react'
import PropTypes from 'prop-types';
import  './profile.css'

const Profile=(props)=>{
    console.log(props.data)
    const handleName=(props)=>{
        alert("User Name: "+props);
    }
    return(
        <React.Fragment>
             props.data.map(item=>{
                return(
                <h3>{props.fullname}</h3>
                )
            })
            <div className="card-container">
                <span className="pro" onClick={()=>{handleName(props.fullname)}}>PRO</span>
                <span className="img">{props.children}</span>
                <h3>{props.fullname}</h3>
                <h6>{props.profession}</h6>
                <p>{props.bio}</p>
            </div>          
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